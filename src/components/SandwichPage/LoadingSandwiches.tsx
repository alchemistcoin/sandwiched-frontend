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
  
  // This works, but was easier to modify the .svg from the landing page
  //.banner {
  //  position: relative;
  //  right: 85px;
  //}
  //img {
  //  position: absolute;
  //}
  //img.logo {
  //  left: 20px;
  //  top: 20px;
  //}
  //img.radiance {
  //}
  //img.hamburgers {
  //  top: 64px;
  //  left: -445px;
  //}
`


const LoadingSandwichesDisplay = ()=> (
  <StyledLoadingSandwichesDisplay>
    <img src={logoStripped} />
    {/*<div className="banner">*/}
    {/*  <img className="radiance" src={hamburgerRadiance} style={{zIndex: 0}}/>*/}
    {/*  <img className="hamburgers" src={hamburgers} style={{zIndex: 1}}/>*/}
    {/*  <img className="logo" src={logoOnly} style={{zIndex: 2}}/>*/}
    {/*</div>*/}
  </StyledLoadingSandwichesDisplay>

)
export default LoadingSandwichesDisplay;