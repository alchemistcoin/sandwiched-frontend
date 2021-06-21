import React, { useEffect, useState } from 'react'
import StyledLandingPage, { StyledMainTextBox, StyledButtonsContainer } from './LandingPage.styled'
import EthAddressForm from '../common/EthAddressForm'
import PrimaryButton from '../common/PrimaryButton'
import LogoSvg from '../../assets/logo.svg'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

interface LandingPageProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
}

function constructMetaDescription(search: string): string {
  const params = new URLSearchParams(search)
  const numberMEV = params.get('numberMEV')
  const highestMEV = params.get('highestMEV')
  const totalMEV = params.get('totalMEV')

  if (!numberMEV || !highestMEV || !totalMEV) return ''

  const desc =
    `I was sandwiched for a loss of ${totalMEV}, ${numberMEV} sandwiches in total with the highest being ${highestMEV}! Find out how much you have been taken for on sandwiched.wtf`.replace(
      /-/g,
      ' '
    )

  return desc
}

const LandingPage = ({ onConnect, walletAddress }: LandingPageProps) => {
  /** Router Methods **/
  let history = useHistory()
  let location = useLocation()

  const [isModalOpen, setModalOpen] = useState(false)
  const [inputVal, setInputVal] = useState('')

  const [metaDesc, setMetaDesc] = useState(constructMetaDescription(location.search))
  // Send user to sandwich look up if wallet is connected
  useEffect(() => {
    if (walletAddress) {
      history.push(`/${walletAddress}`)
    }
  })

  useEffect(() => {
    setMetaDesc(constructMetaDescription(location.search))
  }, [location.search])

  return (
    <StyledLandingPage>
      {metaDesc ? (
        <Helmet>
          <meta property="og:title" content="I got Sandwiched, WTF" />
          <meta name="title" content="I got Sandwiched, WTF" />
          <meta property="twitter:title" content="I got Sandwiched, WTF" />
          <meta property="og:description" content={metaDesc} />
          <meta name="description" content={metaDesc} />
          <meta property="twitter:description" content={metaDesc} />
          <script> window.prerenderReady = true; </script>
        </Helmet>
      ) : (
        <></>
      )}

      <img src={LogoSvg} alt="sandwich.wtf" />
      <StyledMainTextBox>
        <p>Every day more than 10,000 DEX trades are attacked by front-running bots, costing over $25,000,000.</p>
        <p>Are you a sandwich victim? Connect your wallet now and find out</p>
      </StyledMainTextBox>

      <StyledButtonsContainer>
        <PrimaryButton
          onClick={async () => {
            const { address, connected } = await onConnect()
            if (connected) {
              history.push(`/${address}`)
            }
          }}
        >
          Connect Wallet
        </PrimaryButton>
        <div>OR</div>
        {/*EthAddressForm*/}
        <EthAddressForm />
      </StyledButtonsContainer>
    </StyledLandingPage>
  )
}
export default LandingPage
