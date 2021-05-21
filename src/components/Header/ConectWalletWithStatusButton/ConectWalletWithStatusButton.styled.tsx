import React from 'react';
import styled from "styled-components";

const StyledConnectWalletWithStatusButton = styled.button`
  transition-duration: 150ms;
  &.disconnected {
    border: 1px solid rgb(var(--color-primary));
    background-color: Transparent;
  }
  &.connected {
    border: none;
    background-color: rgb(var(--color-primary));
  }
  color: rgb(var(--color-text));
  border-radius: 8px;
  width: 120px;
  height: 32px;
  font-size: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height, or 140% */

  letter-spacing: 0.2px;
  
  img {
    float: right;
    vertical-align: middle;
    margin-right: 4px;
  }
  
`;

export default StyledConnectWalletWithStatusButton
