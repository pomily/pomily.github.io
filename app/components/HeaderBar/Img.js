import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  height: 42px;
  left: 10px;
  display: block;
  z-index: 100;
  transition: 1s;
  opacity : ${(props) => props.opacity};
`;

export default Img;
