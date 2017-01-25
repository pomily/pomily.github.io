import styled from 'styled-components';

const IconWrapper = styled.div`
  position: absolute;
  z-index: 10;
  height: 30px;
  width: 30px;
  margin: 0 auto;
  margin-top: ${(props) => props.translation}px;
  transition: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-height: 800px){
      width: 160px;
  }
  @media(min-height: 800px){
      width: 220px;
  }
  align-self: flex-start;

  `;

export default IconWrapper;
