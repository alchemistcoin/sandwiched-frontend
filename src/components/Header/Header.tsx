import React, {useEffect, useState} from 'react';
import StyledHeader from "./Header.styled";
import ConnectWalletWithStatusButton from "./ConectWalletWithStatusButton";
import {
  Link,
} from "react-router-dom";

import logoText from "../../assets/logo-text.svg"


interface HeaderProps {
  onConnect: Function;
  walletAddress: string;
  connected: boolean;
  resetApp: Function;
}



const Header = ({
  onConnect,
  walletAddress,
  connected,
  resetApp,
} : HeaderProps) => {
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

  
  return (
    <StyledHeader>
      <div>
        {/* Only Show Small Logo in corner if we're not on the landing page */}
        {showLogo &&
        <Link // Link doesn't want to redirect to home and also reset the app state
          onClick={()=> {
            setShowLogo(false)
            resetApp()
          }}
          to={"/"}
        >
          <img src={logoText} style={{paddingTop: "0.5rem"}}></img>
        </Link>

        }
      </div>
      <ConnectWalletWithStatusButton
        connected={connected}
        onConnect={onConnect}
        ethereumAddress={walletAddress} //TODO 1: Replace placeholder ethereum address with users wallet address
        resetApp={resetApp}
      />
    </StyledHeader>
  )
};

export default Header
