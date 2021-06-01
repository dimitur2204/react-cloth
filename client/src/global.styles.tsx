import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
}

*{
box-sizing: border-box;
}

.container{
  padding: 20px 60px;
  @media screen and (max-width: 968px){
    padding: 10px;
  }
}

.link{
  text-decoration: none;
  color: black;
  &::after{
    display:block;
  content: '';
  border-bottom: solid 1px black;  
  transform: scaleX(0);  
  transition: transform 350ms ease-in-out;
  }
  &:hover::after{
   transform: scaleX(1); 
  }
}

a{
  text-decoration: none;
  color: black;
}

a.no-hover{
  &:after{
    content: none;
  }
}

a:after {
  display:block;
  content: '';
  border-bottom: solid 1px black;  
  transform: scaleX(0);  
  transition: transform 350ms ease-in-out;
}

a:hover:after {
   transform: scaleX(1); 
}
`

export default GlobalStyle
