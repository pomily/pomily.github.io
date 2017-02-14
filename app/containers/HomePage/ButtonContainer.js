import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 100vw;
  height: 100px;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 15vw;
  @media(max-width: 700px){
    margin-left: 10vw;
  }
  z-index: 100;
`;

export default ButtonContainer;
