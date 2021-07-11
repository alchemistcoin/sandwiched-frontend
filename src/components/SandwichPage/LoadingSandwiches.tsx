import React from 'react'
import hamburgerLine from '../../assets/hamburger-line.svg'
import logoStripped from '../../assets/logo-stripped.svg'
import PrimaryButton from '../common/PrimaryButton'
import { StyledLoadingSandwichesDisplay, StyledMainTextBox } from './LoadingSandwiches.styled'
import { useHistory } from 'react-router-dom'

interface LoadingSandwichesDisplayProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
  resetApp: Function
  error: string
  endAnimation: Boolean
}

const LoadingSandwichesDisplay = ({
  error,
  connected,
  onConnect,
  resetApp,
  walletAddress,
  endAnimation,
}: LoadingSandwichesDisplayProps) => {
  const history = useHistory()
  const header = !error ? 'Hold up!' : 'Uh-oh 😞'
  let paragraph1 = 'We are scanning your wallet transactions for potential sandwiches'
  if (error) {
    if (error.toLowerCase().search('bad wallet address') !== -1) {
      paragraph1 = error + '. Please try again with a valid wallet address'
    } else {
      paragraph1 = error + '. Please try again later'
    }
  }
  return (
    <StyledLoadingSandwichesDisplay>
      <img className="loadingLogoStripped" src={logoStripped} alt="sandwich.wtf" />
      <div className="hamburgers-container">
        {error ? (
          <img src={hamburgerLine} alt="" />
        ) : (
          <>
            <img
              className={!error ? 'left' : ''}
              style={{ animation: endAnimation ? 'animationEnd' : undefined }}
              src={hamburgerLine}
              alt=""
            />
            <img
              className={!error ? 'right' : ''}
              style={{ animation: endAnimation ? 'animationEnd' : undefined }}
              src={hamburgerLine}
              alt=""
            />
          </>
        )}
      </div>
      <StyledMainTextBox>
        <h1>{header}</h1>
        <p>{paragraph1}</p>
        {error && (
          <PrimaryButton
            onClick={() => {
              /** If wallet address is bad reset app and send to home page **/
              if (error.toLowerCase().search('bad wallet address') !== -1) {
                resetApp()
              } else {
                /** another error retry by reloading the page **/
                location.reload()
              }
            }}
          >
            Retry
          </PrimaryButton>
        )}
      </StyledMainTextBox>
    </StyledLoadingSandwichesDisplay>
  )
}

export default LoadingSandwichesDisplay
