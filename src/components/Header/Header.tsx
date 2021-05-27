import React from 'react'
import StyledHeader from './Header.styled'
import ConnectWalletWithStatusButton from './ConectWalletWithStatusButton'
import logoText from '../../assets/logo-text.svg'

interface HeaderProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
  resetApp: Function
  showLogo: boolean
}

const Header = ({ onConnect, walletAddress, connected, resetApp, showLogo }: HeaderProps) => {
  return (
    <StyledHeader>
      <div>
        {/* Only Show Small Logo in corner if we're not on the landing page */}
        <img
          src={logoText}
          style={{ paddingTop: '0.5rem', visibility: showLogo ? 'visible' : 'hidden' }}
          alt="sandwich.wtf"
          onClick={() => {
            resetApp()
          }}
        ></img>
      </div>
      <ConnectWalletWithStatusButton
        connected={connected}
        onConnect={onConnect}
        ethereumAddress={walletAddress} //TODO 1: Replace placeholder ethereum address with users wallet address
        resetApp={() => resetApp()}
      />
    </StyledHeader>
  )
}

export default Header
