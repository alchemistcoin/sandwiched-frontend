import styled from 'styled-components'
import backgroundSvg from '../../assets/background.svg'

export const StyledResultsView = styled.div`
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  // background-image: url(${backgroundSvg});
  // background-size: cover;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 2px;
  }
`
export const StyledSummarySandwichTableWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const StyledSummarySandwichList = styled.div`
  padding: 2px;
  list-style-type: none;
  margin: 15px;
  height: 357px;
  width: 495px; // 645 - 60padding * 2 - 15margin * 2
  /* UI text / Dark_base */
  background: #fcfcfc;
  /* Light / Navigation menu */
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 30px;
  &.good {
    border: 1px solid green;
  }
  &.bad {
    border: 1px solid red;
  }
  ul {
    scrollbar-color: dark;
    margin-left: 60px;
    padding-right: 60px;
    overflow: auto;
    max-height: 300px;
    padding-inline-start: 0px;
  }
`
export const StyledSummarySandwichListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0px;
  padding: 0px 24px;
  background: #fcf6e3;
  border-radius: 88px;
  justify-items: center;
  height: 39px;
  //styleName: Body 14;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;

  span {
    line-height: 39px;
  }
  img.icon {
    flex: 0;
  }
`
export const StyledPageHeader = styled.div`
  text-align: center;
  h1 {
    margin-top: 2px;
    //styleName: Heading 1;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;

    @media only screen and (max-width: 600px) {
      margin-top: 50px;
    }
  }
  p {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
  }
  .mistx-link {
    border: 3px solid rgb(var(--color-primary));
    box-sizing: border-box;
    border-radius: 10px;
    padding: 2px 16px;
    color: #836303;
    font-weight: bold;
    text-decoration: none;
  }
`

export const StyledDetailedTableContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }

  .MuiTableCell-footer {
    background-color: rgb(var(--color-primary));
  }
  .MTablePaginationInner-root-14 {
    font-size: 8px;
  }
  .MuiTableSortLabel-icon {
    //color: rgb(var(--color-primary));
  }
  .MuiTableSortLabel-iconDirectionDesc,
  .MuiTableSortLabel-iconDirectionAsc {
    //color: rgb(var(--color-primary));
  }
  .MuiTableRow-root {
    // display: none;
  }
  .MuiTableRow-root[index],
  .MuiTableRow-head,
  .MuiTableRow-footer {
    display: table-row;
  }
`

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 812px;
  max-width: 1024px;
  @media only screen and (max-width: 864px) {
    flex-direction: column;
    height: 150px;
  }
`
export const StyledAttributesItem = styled.span`
  width: 50px;
  height: 30px;
  border-radius: 8px;
  padding: 6px;
  border: 1px solid rgb(var(--color-primary));
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: rgb(var(--color-primary));
`

export const StyledCTAButton = styled.a`
  cursor: pointer;
  box-shadow: 0px 10px 16px #cae6fa;
  border-radius: 16px;
  background-color: #41afff;
  width: 362px;
  height: 60px;
  //styleName: Heading 6;
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: none;
  @media only screen and (max-width: 864px) {
    width: 395px;
  }
  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    box-shadow: 0 0 6px 0 rgba(var(--color-primary));
    transition: box-shadow 50ms;
  }

  &:active {
    filter: brightness(0.8);
  }

  transition-duration: 150ms;
`
