import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const A = styled.a`${buttonStyles}`;

export default A;


const ButtonText = styled.div`
  background: ${(props) => props.backgroundColor};
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;
