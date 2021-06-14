import React from 'react'
import styled from 'styled-components'
import hamburgers from '../../assets/hamburgers.svg'
import hamburgerLine from '../../assets/hamburger-line.svg'
import logoStripped from '../../assets/logo-stripped.svg'
import errorHamburger from '../../assets/error-hamburger.svg'
import { StyledPrimaryButton } from '../LandingPage/LandingPage.styled'
import { StyledLoadingSandwichesDisplay, StyledMainTextBox } from './LoadingSandwiches.styled'
import { useHistory } from 'react-router-dom'

interface LoadingSandwichesDisplayProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
  resetApp: Function
  error: string
}

const LoadingSandwichesDisplay = ({
  error,
  connected,
  onConnect,
  resetApp,
  walletAddress,
}: LoadingSandwichesDisplayProps) => {
  const history = useHistory()
  const header = !error ? 'Hold up!' : 'Uh-oh 😞'
  const paragraph1 = !error
    ? 'We are scanning your wallet transactions for potential sandwiches'
    : error + '. Please try again later'
  return (
    <StyledLoadingSandwichesDisplay>
      <img className="loadingLogoStripped" src={logoStripped} alt="sandwich.wtf" />
      <div className="hamburgers-container">
        {error ? (
          <img src={hamburgerLine} alt="" />
        ) : (
          <>
            <img className={!error ? 'left' : ''} src={hamburgerLine} alt="" />
            <img className={!error ? 'right' : ''} src={hamburgerLine} alt="" />
          </>
        )}
      </div>
      <StyledMainTextBox>
        <h1>{header}</h1>
        <p>{paragraph1}</p>
        {error && (
          <StyledPrimaryButton
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
          </StyledPrimaryButton>
        )}
      </StyledMainTextBox>
    </StyledLoadingSandwichesDisplay>
  )
}

export default LoadingSandwichesDisplay
