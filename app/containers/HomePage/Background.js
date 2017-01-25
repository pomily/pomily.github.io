import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(157, 172, 160, ${(props) => props.opacity});
  transition: 2.5s;
`;

export default Background;
