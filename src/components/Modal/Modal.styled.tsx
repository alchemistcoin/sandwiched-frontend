import styled from 'styled-components'

export const StyledModalHeader = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  > * {
    display: flex;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
`
export const StyledModalMain = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`
