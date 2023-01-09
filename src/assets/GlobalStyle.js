import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap');

body{
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;
}
`;

export default GlobalStyle;
