import React, {ReactNode} from 'react'
import StyledConnectWalletWithStatusButton from "./ConectWalletWithStatusButton.styled"


interface ConnectWalletWithStatusButtonProps {
  connected: boolean;
  setConnected: Function;
}

const ConnectWalletWithStatusButton = ({
                                         connected,
                                         setConnected,
                                       }: ConnectWalletWithStatusButtonProps) => {
  return (
    <>
      {
        <StyledConnectWalletWithStatusButton
          onClick={()=> {setConnected(!connected)}}
        >
          {connected ? "Connected" : "Connect Wallet"}
        </StyledConnectWalletWithStatusButton>
      }
    </>
  )

}

export default ConnectWalletWithStatusButton;