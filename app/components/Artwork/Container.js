import styled from 'styled-components';


const Container = styled.div`
  @media(max-width: 500px){
      height: 100%;
      width: 100%;
  }
  @media(min-width: 500px){
    height: 100%;
    width: 100%;
  }
  overflow: hidden;
  margin: 0 auto;
  margin-top: -40px;
  align-self: flex-end;
`;

export default Container;
