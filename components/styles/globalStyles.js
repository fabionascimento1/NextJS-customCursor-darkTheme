import { createGlobalStyle } from "styled-components";

const GlobalStylesI = createGlobalStyle`
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`;

export const GlobalStyles = (props) => <GlobalStylesI {...props} />;
