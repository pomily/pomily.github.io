/**
 *
 * StepAnimation.react.js
 *
 */

import React from 'react';

import Container from './Container';
import AnimationContainer from './AnimationContainer';
import Animation from './Animation';
import Strip from './ark_slideshow_home2.png';

function StepAnimation(props) {
	return (
		<div>
			<Container>
				<AnimationContainer>
					<Animation src={Strip}/>
				</AnimationContainer>
			</Container>
		</div>
	);
}

export default StepAnimation;