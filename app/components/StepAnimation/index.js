/**
 *
 * StepAnimation.react.js
 *
 */

import React from 'react';

import AnimationContainer from './AnimationContainer';
import Animation from './Animation';
import Strip from './ark_slideshow_home2.png';

function StepAnimation(props) {
	return (
		<AnimationContainer>
			<Animation src={Strip}/>
		</AnimationContainer>
	);
}

export default StepAnimation;