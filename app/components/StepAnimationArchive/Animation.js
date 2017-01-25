import styled, { keyframes } from 'styled-components';

const translateSmall = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -4000px;
  }
`;

const translateMedium = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -6000px;
  }
`;

const translateLarge = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -8000px;
  }
`;

const Animation = styled.div`
  background-image: url(${(props) => props.src});
  // background-size: 8000px 320px;
  background-size: ${(props) => props.stripWidth}px ${(props) => props.height}px;
  background-repeat: none;
  width: ${(props) => props.stripWidth}px;
  height: ${(props) => props.height}px;
  background-position: 0, 0;
  animation:${(props) => props.size} 1.4s infinite steps(20);
`;

export default Animation;
