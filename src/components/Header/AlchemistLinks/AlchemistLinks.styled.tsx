import styled from 'styled-components'

const StyledAlchemistLinks = styled.div`
  color: #190134;
  display: flex;
  align-items: center;
  button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 4px;
    line-height: 10px;
    @media only screen and (max-width: 600px) {
      line-height: 8px;
    }
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 10px;
  position: absolute;
  width: 331px;
  left: 20px;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* UI text / Dark_base */
  background: #fcfcfc;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`

export const StyledListItem = styled.li`
  a {
    display: flex;
    width: 100%;
    height: 69px;
    padding: 0px 14px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    color: #190134;
    text-underline: none;
    text-decoration: none;
  }
  &:hover {
    background-color: #edf6fc;
  }
  img {
    flex: 0;
    height: 40px;
  }
  .title {
    font-size: 16px;
    line-height: 24px;
  }
  .description {
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
  }
`

export default StyledAlchemistLinks
