/**
 *
 * StepAnimation.react.js
 *
 */

import React from 'react';

import AnimationContainer from './AnimationContainer';
import Animation from './Animation';
import Strip from './ark_slideshow_home_big.png';

function StepAnimation() {
  /* Get the view height of the current display*/
  const viewHeight = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  const viewWidth = (Math.max(document.documentElement.clientWidth, window.innerWidth || 0));

  const containerHeight = (0.45 * viewHeight);
  const containerWidth = animationHeight / 0.8375;
  var animationHeight = 0;
  var animationWidth = 0;
  var animationSize;

  if (viewWidth > 800){
  	animationWidth = 400;
  	animationSize = "${translateLarge}";
  }
  else if(viewWidth > 600){
  	animationWidth = 300;
  	animationSize = "translateMedium";
  }
  else{
  	animationWidth = 200;
  	animationSize = "translateSmall";
  }
  animationHeight = animationWidth * 0.8;
  const stripWidth = 20 * animationWidth;

  return (
  	// <AnimationContainer>
    <AnimationContainer height={containerHeight} width={containerWidth}>
      <Animation src={Strip} height={animationHeight} width={animationWidth} stripWidth={stripWidth} size={animationSize}/>
    </AnimationContainer>
  );
}

export default StepAnimation;

