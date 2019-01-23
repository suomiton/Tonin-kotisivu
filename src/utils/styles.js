import { css } from "styled-components";

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
  }

  h1 {
    font-size: 48px;
    line-height: 32px;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;
    line-height: 24px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
  }
`;

export default GlobalStyles;
