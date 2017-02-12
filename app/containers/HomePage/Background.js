import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(255, 253, 253, ${(props) => props.opacity});
  transition: 2.5s;
`;

export default Background;
