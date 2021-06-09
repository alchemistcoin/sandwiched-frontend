import React from 'react'
import styled from 'styled-components'
import hamburgers from '../../assets/hamburgers.svg'
import logoStripped from '../../assets/logo-stripped.svg'

const StyledLoadingSandwichesDisplay = styled.div`
  margin-top: 19vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.loadingLogoStripped {
    //animation: blinker 1s cubic-bezier(0.68, -0.57, 0.26, 1.65) infinite;
    @keyframes blinker {
      100% {
        opacity: 0.15;
      }
    }
  }

  img.hamburgers {
    position: relative;
    top: -193px;
    right: 2px;

    //animation: slideshow 10s linear infinite;
    //
    //@keyframes slideshow {
    //  0% {
    //    left: 54vw;
    //  }
    //  100% {
    //    left: -54vw;
    //  }
    //}

    @keyframes slide-right {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(100px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes slide-right-pause {
      50% {
        left: 0;
      }
      75% {
        left: -100px;
      }
      100% {
        left: 0;
      }
    }
  }
`

export const StyledMainTextBox = styled.div`
  margin-top: -94px;
  color: rgb(var(--color-text));
  padding: 0px 40px;
  max-width: 413px;
  height: 150px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  line-height: 38px;
`

const LoadingSandwichesDisplay = () => (
  <StyledLoadingSandwichesDisplay>
    <img className="loadingLogoStripped" src={logoStripped} alt="sandwich.wtf" />
    <img className="hamburgers" src={hamburgers} alt="" style={{ animationPlayState: 'paused' }} />
    <StyledMainTextBox>
      <h1>Hold up!</h1>
      <p>We are scanning your wallet transactions for potential sandwiches</p>
    </StyledMainTextBox>
  </StyledLoadingSandwichesDisplay>
)

export default LoadingSandwichesDisplay
