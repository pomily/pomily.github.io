import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  height: ${(props) => props.height}px;
  display: block;
  padding-top: 10px;
  z-index: 100;
  transition: 1s;
  opacity : ${(props) => props.opacity};
`;

export default Img;
