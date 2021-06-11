import React, { useEffect } from 'react'
import StyledConnectWalletWithStatusButton from './ConectWalletWithStatusButton.styled'
import connectIcon from '../../../assets/connect-icon.svg'
import statusConnected from '../../../assets/status-connected.svg'
import { useParams } from 'react-router-dom'

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
  // @ts-ignore
  let { walletAddress } = useParams()

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
            if (connected) {
              resetApp()
            } else {
              const { address } = await onConnect()
              if (walletAddress !== address) {
                window.location.href = `/${address}` // Dont use history here beacuse we want it to wipe out the old data
              }
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
