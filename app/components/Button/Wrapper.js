import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 3;
  width: 100%;
  height: 0px;
  text-align: center;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  opacity: ${(props) => props.opacity};
  transition: 1s;
  `;

export default Wrapper;
