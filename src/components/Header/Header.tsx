import React, { useState } from 'react';
import StyledHeader from "./Header.styled";
import ConnectWalletWithStatusButton from "../ConectWalletWithStatusButton";

const Header = ()=> {
  const [conected, setConnected] = useState(false);

  return (
    <StyledHeader>
      <div>
        {/* Only Show Small Logo in corner if we're not on the landing page */}
        {window.location.pathname != "/" &&
        <span>WTF LOGO</span>
      }
      </div>
      <ConnectWalletWithStatusButton
        connected={conected}
        setConnected={setConnected}
      />

    </StyledHeader>
  )
}

export default Header
