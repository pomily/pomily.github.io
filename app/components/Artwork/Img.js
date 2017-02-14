import styled, { keyframes } from 'styled-components';

const Img= styled.div`
  display: block;
  background-image: url(${(props) => props.src});
  background-position: 100%, 0%;
  background-size: auto 80%;
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
