import styled from 'styled-components'
import backgroundSvg from '../../assets/background.svg'

export const StyledResultsView = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: row;
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
  }
  p {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: center;
  }
`

export const StyledDetailedTableContainer = styled.div`
  width: 100%;
  background-color: #ffbf00;
  //margin-top: 60px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  //padding-bottom: 32px;
  .MuiTableCell-footer {
    background-color: rgb(var(--color-primary));
  }
  .MTablePaginationInner-root-14 {
    font-size: 8px;
  }
  .MuiTableSortLabel-icon {
    color: rgb(var(--color-primary));
  }
  .MuiTableSortLabel-iconDirectionDesc,
  .MuiTableSortLabel-iconDirectionAsc {
    color: rgb(var(--color-primary));
  }
`