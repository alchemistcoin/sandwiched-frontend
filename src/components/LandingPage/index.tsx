import React, { useEffect, useState } from 'react'
import StyledLandingPage, { StyledMainTextBox, StyledConnectWalletButton } from './LandingPage.styled'
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

  console.log('desc', desc)
  return desc
}

const LandingPage = ({ onConnect, walletAddress }: LandingPageProps) => {
  /** Router Methods **/
  let history = useHistory()
  let location = useLocation()

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
    // <Container>
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
        <p>Did you know, you might have some unsuspected transactions, which might be draining away your wallet?</p>
        <p>We help you scan and find those sandwiches in your transactions.</p>
      </StyledMainTextBox>
      <StyledConnectWalletButton
        onClick={async () => {
          const { address, connected } = await onConnect()
          if (connected) {
            history.push(`/${address}`)
          }
        }}
      >
        Connect Wallet
      </StyledConnectWalletButton>
    </StyledLandingPage>
    // </Container>
  )
}
export default LandingPage
