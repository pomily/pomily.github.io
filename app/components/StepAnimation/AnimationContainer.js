import styled from 'styled-components';


const AnimationContainer = styled.div`
  @media(max-width: 500px){
      height: 256px;
      width: 320px;
  }
  @media(min-width: 500px){
      height: 320px;
      width: 400px;
  }
  @media(min-width: 800px){
      height: 360px;
      width: 450px;
  }
  @media(max-height: 800px){
      height: 256px;
      width: 320px;
  }
  @media(max-height: 650px){
      height: 200px;
      width: 250px;
  }
   width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: -40px;
  align-self: flex-end;
`;

export default AnimationContainer;
