import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Heebo:wght@400;500&family=Roboto:wght@400;500&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:none;
}
html,body{
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  background:#F5F8FA;
}
button{
  cursor:pointer;
  font-family: "Heebo", sans-serif;
  }
p{
  font-family: "Barlow", sans-serif;
}

`;
