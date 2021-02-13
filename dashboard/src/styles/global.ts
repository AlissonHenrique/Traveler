import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
  }
  body{
      background:#F5F8FA;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body,input,button{
    font-size:16px;
    font-family: 'Heebo', serif;
  }
 h1,h2,h3,h4,h5,strong{
   font-weight:500
 }
  button{
    cursor: pointer;
  }
`;
