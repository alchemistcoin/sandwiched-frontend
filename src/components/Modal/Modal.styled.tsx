import styled from 'styled-components'

export const StyledModalHeader = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  font-weight: 700;
  color: rgb(var(--color-text));
  font-size: 22px;

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
  padding: 0 25px 25px;
  box-sizing: border-box;
  color: rgb(var(--color-text));

  h1,
  h2,
  h3,
  h4 {
    margin: 0 0 10px;
  }
  p {
    font-size: 16px;
  }
`
