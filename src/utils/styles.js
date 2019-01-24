import { css } from "styled-components";

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    color: green;
    background: url("/img/heic0611b.jpg") repeat top left
      ${props => props.theme.colors.primary};
  }

  h1 {
    font-size: 48px;
    line-height: 32px;
    font-weight: bold;
    text-align: center;
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
