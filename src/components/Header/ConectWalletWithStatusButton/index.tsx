import React, { useEffect } from 'react'
import StyledConnectWalletWithStatusButton from './ConectWalletWithStatusButton.styled'
import connectIcon from '../../../assets/connect-icon.svg'
import statusConnected from '../../../assets/status-connected.svg'
import { useHistory } from 'react-router-dom'

interface ConnectWalletWithStatusButtonProps {
  connected: boolean
  onConnect: Function
  resetApp: Function
  ethereumAddress: string
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
  // ! This is acutally not desireable because then you cannot use any arbitrary wallet ID, but instead would have to be connected yourself,
  // instead we should just redirect the user if they connect, but not worry about disconnections
  // useEffect(() => {
  //   if (!connected) {
  //     history.push(`/`)
  //   }
  // })
  let buttonText = 'Connect Wallet'
  if (connected) {
    if (!ethereumAddress) {
      buttonText = '...'
    } else {
      buttonText =
        ethereumAddress?.substr(1, 4) +
        '...' +
        ethereumAddress?.substr(ethereumAddress.length - 3, ethereumAddress?.length)
    }
  }
  return (
    <>
      {
        <StyledConnectWalletWithStatusButton
          onClick={async () => {
            const { address } = await onConnect()
            if (connected) {
              resetApp()
              history.push('/')
            } else {
              history.push(`/${address}`)
            }
          }}
          className={connected ? 'connected' : 'disconnected'}
        >
          {buttonText}
          {connected ? <img src={statusConnected} alt="connected" /> : <img src={connectIcon} alt="disconnected" />}
        </StyledConnectWalletWithStatusButton>
      }
    </>
  )
}

export default ConnectWalletWithStatusButton
