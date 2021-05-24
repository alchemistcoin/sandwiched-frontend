import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyledLandingPage, {StyledMainTextBox, StyledConnectWalletButton} from './LandingPage.styled'
import LogoSvg from '../../assets/logo.svg';
import Web3 from "web3"
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useHistory} from "react-router-dom";



interface LandingPageProps {
  onConnect: Function;
  walletAddress: string;
  connected: boolean;
}

const LandingPage = ({
  onConnect,
  walletAddress,
}: LandingPageProps) => {


  /** Router Methods **/
  let history = useHistory()

  // Send user to Sandwhich look up if wallet is connected
  useEffect(() => {
    if (walletAddress) {
      history.push(`/${walletAddress}`)
    }
  });


  return (
    // <Container>
    <StyledLandingPage>
      <img src={LogoSvg} />
      <StyledMainTextBox>
        <p>Did you know, you might have some unsuspected transactions, which might be draining away your wallet?</p>
        <p>We help you scan and find those sandwiches in your transactions.</p>
      </StyledMainTextBox>
      <StyledConnectWalletButton
      onClick={async ()=> {
        const {address, connected} = await onConnect()
        if (connected) {
          history.push(`/${address}`)
        }
      }

      }>
        Connect Wallet
      </StyledConnectWalletButton>
    </StyledLandingPage>
    // </Container>
  )
}
export default LandingPage;