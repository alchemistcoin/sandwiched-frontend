import styled from 'styled-components'

const StyledLandingPage = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledMainTextBox = styled.div`
  color: rgb(var(--color-text));
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0px 20px;
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

export const StyledPrimaryButton = styled.button`
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
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

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

export const StyledManualAddress = styled.div`
  margin: 10px 0 60px 0;
  cursor: pointer;
  font-size: 16px;
`

export const StyledAddressForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    display: flex;
    width: 100%;
    background: #e9e9e9;
    padding: 15px;
    font-size: 16px;
    border-radius: 15px;
    border: 0;
    margin: 20px 0;
  }
`

export default StyledLandingPage
