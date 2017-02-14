import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  z-index: 10;
  height: 30px;
  width: 30px;
  @media(max-width: 800px){
    width: 17px;
    height: 17px;
  }
  margin: 0 auto;
  transition: .3s;

`;

export default Img;
