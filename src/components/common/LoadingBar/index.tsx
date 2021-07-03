import styled from 'styled-components'
import React from 'react'

const StyledLoadingBar = styled.div`
  --gradient: linear-gradient(90deg, #d8d8d8 0px, #e2e2e2 40px, #d8d8d8 80px);
  --animation: shine 1.6s infinite linear;
  background-image: var(--gradient);
  animation: var(--animation);
  @keyframes shine {
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 200px;
    }
  `

const LoadingBar = ({ width, height }: { width: number; height: number }) => (
  <StyledLoadingBar style={{ width: width.toString(), height: height }}>
    <svg height={'0'} width={width.toString()}></svg>
  </StyledLoadingBar>
)

export default LoadingBar
