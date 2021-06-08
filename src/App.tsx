import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import StyledHeader from './components/Header/Header'
import backgroundSvg from './assets/background.svg'
import Web3 from 'web3'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import SandwichPage from './components/SandwichPage'

import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { getChainData } from './helpers/utilities'
import { IAssetData } from './helpers/types'

import { Helmet } from 'react-helmet'
const META_DESCRIPTION =
  'Find out how much $$$ has been drained from your wallet by unsuspected sandwich transactions. Sandwiched is bringing transparency to the rampant MEV occuring on the most popular DEXs.'
const META_IMAGE = 'https://mistx.io/assets/img/mistX.png'
const META_TITLE = 'Sandwiched.wtf'
const META_URL = 'https://sandwiched.wtf'

// FROM EXAMPLE: https://github.com/Web3Modal/web3modal/blob/master/example/src/App.tsx

interface IAppState {
  fetching: boolean
  address: string
  web3: any
  provider: any
  connected: boolean
  chainId: number
  networkId: number
  assets: IAssetData[]
  showModal: boolean
  pendingRequest: boolean
  result: any | null
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: '',
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null,
}

function initWeb3(provider: any) {
  const web3: any = new Web3(provider)

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  })

  return web3
}

class App extends React.Component<any, any> {
  public web3Modal: Web3Modal
  public state: IAppState

  constructor(props: any) {
    super(props)
    this.state = {
      ...INITIAL_STATE,
    }

    this.web3Modal = new Web3Modal({
      network: this.getNetwork(),
      cacheProvider: true,
      providerOptions: this.getProviderOptions(),
    })
  }

  public componentDidMount() {
    if (this.web3Modal.cachedProvider) {
      this.onConnect()
    }
  }

  /** Wallet Methods **/
  public onConnect = async () => {
    const provider = await this.web3Modal.connect()

    await this.subscribeProvider(provider)

    const web3: any = initWeb3(provider)
    const accounts = await web3.eth.getAccounts()
    const address = accounts[0]

    const networkId = await web3.eth.net.getId()

    const chainId = await web3.eth.chainId()

    await this.setState({
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId,
    })

    return { address, connected: true }
  }

  public subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return
    }
    provider.on('close', () => this.resetApp())
    provider.on('accountsChanged', async (accounts: string[]) => {
      await this.setState({ address: accounts[0] })
      window.location.href = '/'
      // await this.getAccountAssets();
    })
    provider.on('chainChanged', async (chainId: number) => {
      const { web3 } = this.state
      const networkId = await web3.eth.net.getId()
      await this.setState({ chainId, networkId })
      // await this.getAccountAssets();
    })

    provider.on('networkChanged', async (networkId: number) => {
      const { web3 } = this.state
      const chainId = await web3.eth.chainId()
      await this.setState({ chainId, networkId })
      // await this.getAccountAssets();
    })
  }

  public getNetwork = () => getChainData(this.state.chainId).network

  public getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
      // torus: {
      //   package: Torus
      // },
      // fortmatic: {
      //   package: Fortmatic,
      //   options: {
      //     key: process.env.REACT_APP_FORTMATIC_KEY
      //   }
      // },
      // authereum: {
      //   package: Authereum
      // },
      // bitski: {
      //   package: Bitski,
      //   options: {
      //     clientId: process.env.REACT_APP_BITSKI_CLIENT_ID,
      //     callbackUrl: window.location.href + "bitski-callback.html"
      //   }
      // }
    }
    return providerOptions
  }

  /** State Methods **/
  public resetApp = async () => {
    const { web3 } = this.state
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close()
    }
    await this.web3Modal.clearCachedProvider()
    this.setState({ ...INITIAL_STATE })
  }

  public render = () => {
    const { connected } = this.state
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundSvg})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <Helmet>
          <title>{META_TITLE}</title>
          <meta name="description" content={META_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={META_URL} />
          <meta property="og:title" content={META_TITLE} />
          <meta property="og:description" content={META_DESCRIPTION} />
          <meta property="og:image" content={META_IMAGE} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={META_URL} />
          <meta property="twitter:title" content={META_TITLE} />
          <meta property="twitter:description" content={META_DESCRIPTION} />
          <meta property="twitter:image" content={META_IMAGE} />
        </Helmet>
        {/* Router */}
        <Router>
          <Switch>
            <Route exact path="/">
              {/* Header */}
              <StyledHeader
                showLogo={false}
                onConnect={this.onConnect}
                connected={connected}
                walletAddress={this.state.address}
                resetApp={this.resetApp}
              />
              <LandingPage onConnect={this.onConnect} connected={connected} walletAddress={this.state.address} />
            </Route>
            <Route path="/:walletAddress">
              {/* Header */}
              <StyledHeader
                showLogo={true}
                onConnect={this.onConnect}
                connected={connected}
                walletAddress={this.state.address}
                resetApp={this.resetApp}
              />
              <SandwichPage />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
// END FROM EXAMPLE

// TODO 1: Replace with real results page once implemented
function ResultsPage() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  // @ts-ignore
  let { walletAddress } = useParams()
  return (
    <div>
      <h3>Wallet Address: {walletAddress}</h3>
    </div>
  )
}

export default App
