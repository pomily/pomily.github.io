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
  width: 500px;
  padding-left: 25px;
  padding-top: 20px;
  letter-spacing: 1px;
  line-height: 26px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: 0;
  font-size: 12pt;
  font-family: 'CircularBook','Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #C7B4AC;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: .3s;

`;

export default Body;
