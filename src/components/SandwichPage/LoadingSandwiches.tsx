import React, {useEffect} from 'react'
import styled from "styled-components";
import hamburgerRadiance from "../../assets/hamburger-radiance.svg"
import hamburgers from "../../assets/hamburgers.svg"
import logoOnly from "../../assets/logo-only.svg"
import logoStripped from "../../assets/logo-stripped.svg"


const StyledLoadingSandwichesDisplay = styled.div`
  margin-top: 4rem;
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

const LoadingSandwichesDisplay = ()=> (
  <StyledLoadingSandwichesDisplay>
    <img src={logoStripped} />
    <img className="hamburgers" src={hamburgers}/>

  </StyledLoadingSandwichesDisplay>

)
export default LoadingSandwichesDisplay;