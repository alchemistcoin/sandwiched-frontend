import React from 'react';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';



const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledMainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #190134;
  max-width: 592px;
  height: 199px;
  border: 2px var(--color-primary);
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  /* or 192% */
`;

export const StyledConnectWalletButton = styled.button`
  border: none;
  border-radius: 69px;
  background-color: rgb(var(--color-primary));
  width: 317px;
  height: 54px;
  //styleName: Heading 6;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    box-shadow: 0 0 6px 0 rgba(var(--color-primary));
    transition: box-shadow 50ms;
  }

  &:active {
    filter: brightness(0.8);
  }
`

export default StyledLandingPage
/* Did you know, you might have some unsuspected transactions, which might be draining away your wallet? We help you scan and find those sandwiches in your transactions. */
