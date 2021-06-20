import styled from 'styled-components'

export const StyledAddressForm = styled.form`
  width: 368px;
  border-radius: 16px;
  background: #e9e9e9;
  display: flex;
  .input-wrapper {
    flex: 1;
    margin-left: 20px;
    height: 72px;
    display: inline;
    background: #e9e9e9;
  }
  .rectangle {
    display: inline;
    padding: 1.5px;
    min-height: 24px;
    background-color: #c4c4c4;
  }
  input {
    height: 100%;
    width: 100%;
    border: 0;
    display: inline;
    background: #e9e9e9;
    padding: 15px;
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
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    background-color: rgba(var(--color-primary));
    border: none;
    float: right;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  &.small {
    .input-wrapper {
      height: 60px;
    }
    button {
      height: 60px;
    }
  }
`
