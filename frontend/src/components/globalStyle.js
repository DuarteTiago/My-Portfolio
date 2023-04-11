import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #1b1b1b;
  overflow-x: hidden;
  text-decoration: none;

}
button{
  font-size: 18px;
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  color: #ff6347;
  border: 3px solid #ff6347;
  transition: all 0.5s ease;
  &:hover{
    background-color: #ff6347;
    color: #1b1b1b;
    
  }
}
h2{
  font-weight: lighter;
  font-size: 4rem;
  background: transparent;
  
}
h3{
  color: white;

}
h4{
  font-weight: bold;
  font-size: 1.2rem;
  color: lightgrey;
}
a{
  font-size:1.1rem;

}
span{
  font-weght: lighter;
  color: #416cd5;
}
p{
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;

}
Label{
  color: black;
  font-weight: bold
}

`;
export default GlobalStyle;
