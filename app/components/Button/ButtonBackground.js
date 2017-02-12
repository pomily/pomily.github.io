import styled from 'styled-components';
import ExploreButton from './ExploreButton.png';

const ButtonBackground = styled.div`
  position: absolute;
  z-index = 2;
  width: 100%;
  text-align: center;
  height: 50px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #5E5E60;
  @media(max-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
      margin-top: 30px;
  }
  @media(min-height: 800px){
      font-size: 14px;
      height: 40px;
      width: 220px;
      margin-top: 25px;
  }
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 20px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  `;

export default ButtonBackground;
