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
export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 872px;
  @media only screen and (max-width: 864px) {
    flex-direction: column;
  }
`

export default StyledLandingPage
