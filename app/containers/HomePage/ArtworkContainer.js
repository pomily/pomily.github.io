import styled from 'styled-components';


const ArtworkContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  @media(min-width: 1000px){
    top: 5%;
    left: 0px;
    width: 100%;
    height: 100vh;
  }
  @media(max-width: 1000px){
    top: 5%;
    left: 0px;
    width: 100%;
    height: 80vh;
  }
  @media(max-width: 800px){
    top: 0%;
    left: 0px;
    width: 100%;
    height: 60vh;
  }
  min-height: 385px;
`;

export default ArtworkContainer;
