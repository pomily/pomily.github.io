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
  padding-left: 10px;
  padding-top: 10px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: 0;
  font-size: 24pt;
  font-family: 'CircularMedium','Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${(props) => props.color};
  transition: .3s;
  @media(max-width: 700px){
    font-size: 20pt;
  }

`;

export default Title;
