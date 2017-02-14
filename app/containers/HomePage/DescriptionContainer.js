import styled from 'styled-components';

const DescriptionContainer = styled.div`
  width: 100vw;
  height: 170px;
  margin-left: 15vw;
  @media(max-height: 800px){
    margin-top: 15vh;
  }
  @media(min-height: 800px){
    margin-top: 20vh;
  }
  @media(max-width: 700px){
    margin-top: 28vh;
    margin-left: 10vw;

    @media(max-height: 600px){
        margin-top: 22vh;
    }
  }
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
`;

export default DescriptionContainer;
