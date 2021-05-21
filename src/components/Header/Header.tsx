import React, {useEffect, useState} from 'react';
import StyledHeader from "./Header.styled";
import ConnectWalletWithStatusButton from "./ConectWalletWithStatusButton";
import {
  Link,
} from "react-router-dom";

import logoText from "../../assets/logo-text.svg"

const Header = () => {
  const [conected, setConnected] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if(window.location.pathname != "/") {
      setShowLogo(true)
    } else {
      setShowLogo(false)
    }
  });

  console.log(showLogo)
  return (
    <StyledHeader>
      <div>
        {/* Only Show Small Logo in corner if we're not on the landing page */}
        {showLogo &&
        <Link
          onClick={ ()=> setShowLogo(false)}
          to={"/"}>
          <img src={logoText} style={{paddingTop: "0.5rem"}}></img>
        </Link>

        }
      </div>
      <ConnectWalletWithStatusButton
        connected={conected}
        setConnected={setConnected}
        ethereumAddress={"PLACEHOLDER123456789"} //TODO 1: Replace placeholder ethereum address with users wallet address
      />
    </StyledHeader>
  )
};

export default Header
