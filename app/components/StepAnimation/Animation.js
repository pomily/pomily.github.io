import styled, { keyframes } from 'styled-components';

const translate = keyframes `
	from {
		background-position: 0px; 
	}
	to {
		background-position: -6400px;
	}
`;

const Animation = styled.div`
  background-image: url(${props => props.src});
  background-size: 6400px 268px;
  background-repeat: none;
  width: 6400px;
  height: 268px;
  background-position: 0, 0;
  animation:${translate} 1.1s infinite steps(20);
`;

export default Animation;