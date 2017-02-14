import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import CircularBook from './CircularStd-Book.otf';



injectGlobal`
  @font-face {
    font-family: CircularBook;
    src: url('${CircularBook}') format('opentype');
}
`


const Body = styled.div`
  padding-left: 10px;
  padding-top: 20px;
  letter-spacing: 0.01px;
  line-height: 19px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: 0;
  font-size: 11pt;
  font-family: 'CircularBook','Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: left;
  transition: .3s;
  @media(max-width: 1000px){
    width: 400px;
  }
  @media(min-width: 1000px){
    width: 500px;
  }
  @media(max-width: 700px){
    font-size: 10pt;
    width: 350px;
  }

`;

export default Body;
