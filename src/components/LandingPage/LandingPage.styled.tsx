import styled from 'styled-components'

const StyledLandingPage = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledMainTextBox = styled.div`
  color: rgb(var(--color-text));
  margin-top: 10px;
  padding: 0px 40px;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-around;
  max-width: 562px;
  height: 300px;
  //border: 2px solid rgb(var(--color-primary));
  text-align: center;
  font-style: normal;
  font-weight: normal;
  line-height: 38px;
  /* or 192% */
  p:nth-child(2) {
    margin-top: 30px;
  }
`

export const StyledConnectWalletButton = styled.button`
  cursor: pointer;
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

  transition-duration: 150ms;
`

export default StyledLandingPage
