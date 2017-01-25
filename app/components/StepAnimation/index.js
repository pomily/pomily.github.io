/**
 *
 * StepAnimation.react.js
 *
 */

import React, { PropTypes, Children } from 'react';

import AnimationContainer from './AnimationContainer';
import Animation from './Animation';
import Strip from './ark_slideshow_home_big.png';
import StripHover from './ark_slideshow_home_hover.png';


function StepAnimation(props) {
  /* Get the view size of the current display*/
  const viewHeight = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  const viewWidth = (Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  var containerHeight = 0;
  var containerWidth = 0;

  /* Check display size*/
  var isSmall = true;
  if (viewWidth > 800 && viewHeight > 640){
    isSmall = false;
  }
  else{
    isSmall = true;
  }

  /* Switch out animation type based on hover*/
  var mainVisible = "block";
  var hoverVisible = "none";
  var scale = 1;
  var translation = 0;

  if (props.hover){
    mainVisible = "none";
    hoverVisible = "block";
    scale = 1.09375;
  }

  /* Transformation constant for the hover animation*/
  const hoverScale = 1.09375;
  const hoverTranslation = -3.8;


  return (
    <AnimationContainer height={containerHeight * 1.09375} width={containerWidth}>
      <Animation src={Strip} visible={mainVisible} scale='1' translation='0'/>
      <Animation src={StripHover} visible={hoverVisible} scale={hoverScale} translation={hoverTranslation}/>
    </AnimationContainer>

  );
}

AnimationContainer.propTypes = {
  hover: PropTypes. bool,
};

export default StepAnimation;
