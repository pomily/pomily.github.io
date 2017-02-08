import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  height: 13vh;
  margin: 0 auto;
  display: block;
  padding-top: 10px;
  min-height: 70px;
  max-height: 100px;
  z-index: 100;
  transition: 1s;
  opacity : ${(props) => props.opacity};
`;

export default Img;
