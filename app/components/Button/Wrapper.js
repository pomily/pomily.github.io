import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 3;
  height: 0px;
  text-align: center;
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  opacity: ${(props) => props.opacity};
  transition: 1s;
  `;

export default Wrapper;
