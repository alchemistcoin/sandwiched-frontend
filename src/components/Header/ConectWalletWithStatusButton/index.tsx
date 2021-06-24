import React, { useEffect, useState } from 'react'
import StyledConnectWalletWithStatusButton from './ConectWalletWithStatusButton.styled'
import connectIcon from '../../../assets/connect-icon.svg'
import statusConnected from '../../../assets/status-connected.svg'
import { useParams } from 'react-router-dom'
import { reverseEnsLookup, getEnsData } from '../../../helpers/ens'
import { conciseEthAddress } from '../../../helpers/utilities'
import { IEnsData } from '../../../helpers/types'
import ENSAddress from '../../SandwichPage/ENSAddress'

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

  let buttonText: JSX.Element | string = 'Connect Wallet'
  if (connected) {
    if (!ethereumAddress) {
      buttonText = '...'
    } else {
      buttonText = <ENSAddress address={ethereumAddress} ensName={'happyPathMan'} />
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
          <span style={{ margin: 6 }}>{buttonText}</span>
          {connected ? <img src={statusConnected} alt="connected" /> : <img src={connectIcon} alt="disconnected" />}
        </StyledConnectWalletWithStatusButton>
      }
    </>
  )
}

export default ConnectWalletWithStatusButton
