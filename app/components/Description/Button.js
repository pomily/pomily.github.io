import styled from 'styled-components';

import NormalButton from 'components/Button';

const Button = styled(NormalButton)`
  height: 13vh;
  margin: 0 auto;
  display: block;
  margin-left: -20px;
  min-height: 70px;
  max-height: 100px;
  z-index: 100;
  transition: 1s;
  width: 100vw;
  height: 30vh;
  padding-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
