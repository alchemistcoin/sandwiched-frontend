import styled from 'styled-components'

const StyledSummaryCard = styled.div`
  padding: 18px;
  width: 195px;
  height: auto;
  background-color: #ffbf00;
  background: #fcfcfc;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }

  &.clickable {
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 2px rgba(217, 106, 25, 0.6), 0px 4px 8px rgba(217, 106, 25, 0.7);
    }
    &:focus {
      transition: box-shadow 50ms;
    }

    &:active {
      filter: brightness(0.8);
      box-shadow: 0px 0px 4px rgba(217, 106, 25, 0.8), 0px 6px 10px rgba(217, 106, 25, 0.9);
    }

    transition-duration: 150ms;
  }

  .statusIcon {
    text-align: right;
  }
  .summaryCardIcon {
  }
  .iconContainer {
    margin-top: -16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    border-radius: 70px;
  }
  .centeredContent {
    margin-top: 0px;
    margin-bottom: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .summaryCardTitle {
    margin-top: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .summaryCardValue {
    margin-top: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: right;
  }
`

export default StyledSummaryCard
