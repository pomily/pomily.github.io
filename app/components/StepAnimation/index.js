/**
 *
 * StepAnimation.react.js
 *
 */

import React from 'react';

import AnimationContainer from './AnimationContainer';
import Animation from './Animation';
import Strip from './ark_slideshow_home_new.png';

function StepAnimation() {
  return (
    <AnimationContainer>
      <Animation src={Strip}/>
    </AnimationContainer>
  );
}

export default StepAnimation;
