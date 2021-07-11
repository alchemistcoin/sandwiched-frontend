import styled from 'styled-components'

export const StyledAddressForm = styled.form`
  width: 368px;
  border-radius: 16px;
  background: #e9e9e9;
  display: flex;

  &.small {
    height: 60px;
    width: 394px;
  }
  .input-wrapper {
    // Sensitive Styling here for Firefox and Safari
    width: 368px;
    height: 72px;
    display: inline;
    background: #e9e9e9;
    border-radius: 16px;
  }
  .rectangle {
    height: 100%;
    padding: 1.5px;
    margin-left: 20px;
    margin-right: 5px;
    background-color: #c4c4c4;
  }
  input {
    height: 100%;
    width: 236px;
    border: 0;
    display: inline;
    background: #e9e9e9;
    font-size: 18px;
    color: #434343;

    :focus,
    textarea:focus,
    select:focus {
      outline: none;
    }
  }
  button {
    display: flex;
    width: 89px; // Sensitive Styling here for Firefox and Safari
    height: 72px;
    background-color: rgba(var(--color-primary));
    border: none;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  &.small {
    .input-wrapper {
      height: 60px;
    }
    input {
      width: 290px;
    }
    button {
      height: 60px;
      width: 69px;
    }
  }
`
