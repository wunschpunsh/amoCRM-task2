import {createGlobalStyle} from 'styled-components';
import OrbitronRegularWoff from '../../fonts/Orbitron-Regular.woff';
import OrbitronRegularWoff2 from '../../fonts/Orbitron-Regular.woff2';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  src: url(${OrbitronRegularWoff}) format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  src: url(${OrbitronRegularWoff2}) format("woff2");
  font-display: swap;
};

html {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body {
  font-family: ${({theme}) => theme.fontFamily};
  font-size: ${({theme}) => theme.fontSizeDefault};
  line-height: ${({theme}) => theme.lineHeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:  ${({theme}) => theme.colors.mainBgColor};
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  font-family: 'Orbitron', 'Arial', sans-serif;
}
`;

export {GlobalStyles};
