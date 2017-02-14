import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import CircularBlack from './CircularStd-Black.otf';


injectGlobal`
  @font-face {
    font-family: CircularBlack;
    src: url('${CircularBlack}') format('opentype');
}
`


const ButtonInner = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  outline: 0;
  letter-spacing: 3px;
  font-family: 'CircularBlack','Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${(props) => props.buttonColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center
  transition: .3s;
  @media(max-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
  }
  @media(min-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
  }
  &:hover {

  }
`;

export default ButtonInner;
