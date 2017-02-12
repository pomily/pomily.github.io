import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import CircularMedium from './CircularStd-Book.otf';



injectGlobal`
  @font-face {
    font-family: CircularMedium;
    src: url('${CircularMedium}') format('opentype');
}
`


const Title = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: 0;
  font-size: 28pt;
  font-family: 'CircularMedium','Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #E5B5D1;
  transition: .3s;

`;

export default Title;
