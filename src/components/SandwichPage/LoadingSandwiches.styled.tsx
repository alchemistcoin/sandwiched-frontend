import styled from 'styled-components'

export const StyledLoadingSandwichesDisplay = styled.div`
  margin-top: 19vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.loadingLogoStripped {
    opacity: 1;
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0.3;
      }
      75% {
        opacity: 0.5;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .hamburgers-container {
    display: inherit;
    position: relative;
    top: -193px;
    right: 2px;

    .left {
      position: relative;
      left: 25%;
      animation: slide-left-pause 4s infinite;
      @keyframes slide-left-pause {
        50% {
          left: -15%;
        }
        75% {
          left: 24.5%;
        }
        90% {
          left: 25%;
        }
        100% {
          left: 25%;
        }
      }
    }
    .right {
      position: relative;
      right: 25%;
      animation: slide-right-pause 4s infinite;
      @keyframes slide-right-pause {
        50% {
          right: -15%;
        }
        75% {
          right: 24.5%;
        }
        90% {
          right: 25%;
        }
        100% {
          right: 25%;
        }
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
