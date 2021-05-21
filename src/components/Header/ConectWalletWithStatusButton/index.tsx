import React from 'react'
import StyledConnectWalletWithStatusButton from "./ConectWalletWithStatusButton.styled"
import connectIcon from "../../../assets/connect-icon.svg"
import statusConnected from "../../../assets/status-connected.svg"


interface ConnectWalletWithStatusButtonProps {
  connected: boolean;
  setConnected: Function;
  ethereumAddress: string;
}

const ConnectWalletWithStatusButton = ({
   connected,
   setConnected,
   ethereumAddress,
 }: ConnectWalletWithStatusButtonProps) => {
  return (
    <>
      {
        <StyledConnectWalletWithStatusButton
          // TODO 1: Flesh out this onclick function and make it work with a real wallet connection (unless we opt for a faster manually entering wallet address solution)
          onClick={()=> {setConnected(!connected)}}
          className={(connected ? "connected" : "disconnected")}
        >
          {connected
            ?
              ethereumAddress.substr(1,4) + "..." + ethereumAddress.substr(ethereumAddress.length - 3, ethereumAddress.length)
            :
              "Connect Wallet"
          }
          {connected ?
            <img src={statusConnected}/>
            :
            <img src={connectIcon}/>
          }
        </StyledConnectWalletWithStatusButton>
      }
    </>
  )

}

export default ConnectWalletWithStatusButton;