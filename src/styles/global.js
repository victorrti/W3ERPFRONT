import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    :root
  {
    font-size: 62.5%;
  }
    body{
        background: ${ ({theme}) => theme.COLORS.BACKGRAUND_WHITE};
        color:${({theme}) => theme.COLORS.FONT_COLOR};
        font-family: 'Roboto', serif;
        width: 100%;
        margin:0 auto;
        display:relative;
        
        
        
    }
    
    button , a,textarea, body {        
        font-size:16px;
    }

    a{
        text-decoration: none;
    }
    button,a {
        cursor:pointer;
        transition: filter 0.2s;
    }
    button:hover,a:hover {
        filter: brightness(0.9);
    }

`