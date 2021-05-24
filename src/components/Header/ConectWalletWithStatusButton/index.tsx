import React, {useEffect} from 'react'
import StyledConnectWalletWithStatusButton from "./ConectWalletWithStatusButton.styled"
import connectIcon from "../../../assets/connect-icon.svg"
import statusConnected from "../../../assets/status-connected.svg"
import {useHistory} from "react-router-dom"


interface ConnectWalletWithStatusButtonProps {
  connected: boolean;
  onConnect: Function;
  resetApp: Function;
  ethereumAddress: string;
}

const ConnectWalletWithStatusButton = ({
   connected,
   onConnect,
   ethereumAddress,
   resetApp,
 }: ConnectWalletWithStatusButtonProps) => {

  /** Router Methods **/
  let history = useHistory()

  // Send user back to homepage if they disconnect
  useEffect(() => {
    if (!connected) {
      history.push(`/`)
    }
  });

  return (
    <>
      {
        <StyledConnectWalletWithStatusButton
          // TODO 1: Flesh out this onclick function and make it work with a real wallet connection (unless we opt for a faster manually entering wallet address solution)
          onClick={ async ()=> {
            const {address} = await onConnect()
            if (connected) {
              resetApp()
              history.push('/')
            } else {
              history.push(`/${address}`)
            }
          }}
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