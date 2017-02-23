import styled from 'styled-components';


const ButtonOuter = styled.div`
  /*position: relative;
  z-index = 1;
  width: 100%;
  text-align: center;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border: 3px solid ${(props) => props.buttonColor};
  background: ${(props) => props.backgroundColor};
  @media(max-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
      margin-top: 25px;
  }
  @media(min-height: 800px){
      font-size: 12px;
      height: 35px;
      width: 160px;
      margin-top: 25px;
  }
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  outline: 0;
  &:hover {
    border: 3px solid ${(props) => props.hilightColor};
    background: ${(props) => props.hilightColor};
  }*/
  border: 3px solid ${(props) => props.buttonColor};
  background: ${(props) => props.backgroundColor};

  `;

export default ButtonOuter;
