import styled, { keyframes } from 'styled-components';

const translateGiant = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -9000px;
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

const translateSmall = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -6400px;
  }
`;
  

const translateTiny = keyframes `
  from {
    background-position: 0px; 
  }
  to {
    background-position: -5000px;
  }
`;

const Animation= styled.div`
  background-image: url(${(props) => props.src});
  display: ${(props) => props.visible};
  transform: scale(1,${(props) => props.scale});
  margin-top: ${(props) => props.translation}%;
  background-position: 0, 0;
  background-repeat: none;
  @media(max-width: 500px){
      background-size: 6400px 256px;
      height: 256px;
      width:320px;
      animation:${translateSmall} 1.6s infinite steps(20);
  }
  @media(min-width: 500px){
      background-size: 8000px 320px;
      height: 320px;
      width: 8000px;
      animation:${translateLarge} 1.6s infinite steps(20);
  }
  @media(min-width: 800px){
      background-size: 9000px 360px;
      height: 360px;
      width: 9000px;
      animation:${translateGiant} 1.6s infinite steps(20);
  }
  @media(max-height: 800px){
      background-size: 6400px 256px;
      height: 256px;
      width: 6400px;
      animation:${translateSmall} 1.6s infinite steps(20);
  }
  @media(max-height: 650px){
      background-size: 5000px 200px;
      height: 200px;
      width: 5000px;
      animation:${translateTiny} 1.6s infinite steps(20);
  }
`;



export default Animation;


