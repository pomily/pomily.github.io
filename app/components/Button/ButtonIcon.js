import styled from 'styled-components';
import ExploreButton from './ExploreButton.png';
import ExploreButtonLit from './ExploreButtonLit.png';

const ButtonIcon = styled.div`
  position: relative;
  z-index = 1;
  width: 100%;
  text-align: center;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border: 3px solid #E5B5D1;
  @media(max-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
      margin-top: 25px;
  }
  @media(min-height: 800px){
      font-size: 14px;
      height: 40px;
      width: 220px;
      margin-top: 30px;
  }
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: #E5B5D1;
    border: 3px solid #E5B5D1;
  }

  `;

export default ButtonIcon;
