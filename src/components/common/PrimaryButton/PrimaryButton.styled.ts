import styled from 'styled-components'

export default styled.button`
  cursor: pointer;
  border: none;
  border-radius: 69px;
  color: #836303;
  background-color: rgb(var(--color-primary));
  width: 368px;
  border-radius: 16px;
  height: 72px;
  //styleName: Heading 6;
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

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
