import styled, { keyframes } from 'styled-components';

const Img= styled.div`
  display: block;
  background-image: url(${(props) => props.src});
  background-position: 0% 20%;
  background-size: 100%;
  background-repeat: none;
  @media(max-width: 500px){
      height: 100%;
      width: 100%;
  }
  @media(min-width: 500px){
      height: 100%;
      width: 100%;
  }
`;



export default Img;
