import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 34px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 720px) {
    padding: 15px 20px;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
      width: 100%;
      justify-content: space-between;
    }

    img {
      padding: 0;
    }
  }
  nav {
    display: flex;
    padding: 5px 0 0 0;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;

      li {
        list-style: none;
        margin: 0 10px;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;

        @media only screen and (max-width: 600px) {
          font-size: 15px;
          margin: 0 5px;
        }

        &:hover,
        &:active {
          text-decoration: underline;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        svg {
          margin-left: 10px;
          position: relative;
          top: 2px;
        }
      }
    }
  }
`

export default StyledHeader
