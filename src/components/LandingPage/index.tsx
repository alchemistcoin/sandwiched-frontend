import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyledLandingPage, {StyledMainTextBox, StyledConnectWalletButton} from './LandingPage.styled'
import LogoSvg from '../../assets/logo.svg';

const LandingPage = () => (
  <Container>
    <StyledLandingPage>
      <img src={LogoSvg} />
      <StyledMainTextBox>
        <p>Did you know, you might have some unsuspected transactions, which might be draining away your wallet?</p>
        <p>We help you scan and find those sandwiches in your transactions.</p>
      </StyledMainTextBox>
      <StyledConnectWalletButton>
        Connect Wallet
      </StyledConnectWalletButton>
    </StyledLandingPage>




  </Container>
)
export default LandingPage;