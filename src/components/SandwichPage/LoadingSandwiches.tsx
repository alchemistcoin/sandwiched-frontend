import React from 'react'
import styled from "styled-components";
import hamburgers from "../../assets/hamburgers.svg"
import logoStripped from "../../assets/logo-stripped.svg"


const StyledLoadingSandwichesDisplay = styled.div`
  margin-top: 19vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img.hamburgers {
    position: relative;
    top: -193px;
    right: 2px;
  }
`

export const StyledMainTextBox = styled.div`
  margin-top: -94px;
  color: rgb(var(--color-text));
  padding: 0px 40px;
  max-width: 413px;
  height: 150px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  line-height: 38px;
`;

const LoadingSandwichesDisplay = ()=> (
  <StyledLoadingSandwichesDisplay>
    <img src={logoStripped} alt="sandwich.wtf"/>
    <img className="hamburgers" src={hamburgers} alt=""/>
    <StyledMainTextBox>
      <h1>Hold up!</h1>
      <p>We are scanning your wallet transaction for potential sandwiches</p>
    </StyledMainTextBox>
  </StyledLoadingSandwichesDisplay>
)

export default LoadingSandwichesDisplay;
