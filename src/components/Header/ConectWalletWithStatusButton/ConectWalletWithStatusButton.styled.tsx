import styled from 'styled-components'

const StyledConnectWalletWithStatusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition-duration: 150ms;
  color: rgb(var(--color-text));
  border-radius: 8px;
  min-width: 120px;
  height: 32px;
  font-size: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height, or 140% */

  letter-spacing: 0.2px;
  &.disconnected {
    border: 1px solid rgb(var(--color-primary));
    background-color: Transparent;
  }
  &.connected {
    border: none;
    background-color: rgb(var(--color-primary));
  }
  &:hover {
    filter: brightness(0.9);
  }
  img {
    margin-right: 4px;
  }
`

export default StyledConnectWalletWithStatusButton
