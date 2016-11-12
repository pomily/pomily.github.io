import styled, { keyframes } from 'styled-components';

const translate = keyframes `
	from {
		background-position: 0px; 
	}
	to {
		background-position: -8000px;
	}
`;

const Animation = styled.div`
  background-image: url(${props => props.src});
  background-size: 8000px 300px;
  background-repeat: none;
  width: 8000px;
  height: 300px;
  background-position: 0, 0;
  animation:${translate} 1.1s infinite steps(20);
`;

export default Animation;