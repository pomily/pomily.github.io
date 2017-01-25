import { css } from 'styled-components';
import { injectGlobal } from 'styled-components';
import CircularBlack from './CircularStd-Black.otf';
import ExploreButton from './ExploreButton.png';


injectGlobal`
  @font-face {
    font-family: CircularBlack;
    src: url('${CircularBlack}') format('opentype');
}
`


const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 20px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'CircularBlack','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #5E5E60;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center
  margin: 0 auto;
  transition: .3s;
  @media(max-height: 800px){
      font-size: 12px;
      // border: 3px solid #5E5E60;
      height: 35px;
      width: 160px;
  }
  @media(min-height: 800px){
      font-size: 14px;
      // border: 4px solid #5E5E60;
      height: 40px;
      width: 220px;
  }
  &:hover {
    color: #fff;
  }
`;

export default buttonStyles;
