import styled from 'styled-components';


const ArtworkContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 2;
  display: flex;
  align-items: center;
  @media(min-width: 1200px){
    top: 5%;
    left: 0px;
    width: 100%;
    height: 100vh;
  }
  @media(max-width: 1200px){
    top: 15%;
    left: 0px;
    @media(min-height: 700px){
      left: 120px
    }
    width: 100%;
    height: 80vh;
  }
  @media(max-width: 800px){
    top: 0%;
    left: 0px;
    @media(min-height: 700px){
      left: 120px
    }
    width: 100%;
    height: 60vh;
  }
  @media(max-width: 600px){
    top: 0%;
    left: 0%;
    width: 100%;
    height: 50vh;
  }
  min-height: 350px;
`;

export default ArtworkContainer;
