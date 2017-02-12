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
import StripTransition from './ark_slideshow_transition.png';
import StripLoading from './ark_slideshow_loading.png';
import ArtworkA from './splashart-a.png';


function Artwork(props) {
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

  /* Slide visibility*/
  var mainVisible = "none";
  var hoverVisible = "none";
  var transitionVisible = "none";
  var loadingVisible = "none";


  var scale = 1;
  var translation = 0;

  if (props.hover){
    mainVisible = "none";
    hoverVisible = "block";
    scale = 1.09375;
  }

  switch (props.slide){
      case 1:
        if(!props.hover){
          mainVisible = "block";
        }
        break;
      case 2:
        transitionVisible = "block";
        mainVisible = "none";
        hoverVisible = "none";
        loadingVisible = "none";
        break;
      case 3:
        loadingVisible = "block";
        mainVisible = "none";
        hoverVisible = "none";
        transitionVisible = "none";
        break;
      default:
        loadingVisible = "block";
        mainVisible = "none";
        hoverVisible = "none";
        transitionVisible = "none";
  }

  /* Transformation constant for the hover animation*/
  const hoverScale = 1.09375;
  const hoverTranslation = -3.8;




  return (
    <AnimationContainer>
      <Animation src={ArtworkA}/>
    </AnimationContainer>

  );
}

AnimationContainer.propTypes = {
  hover: PropTypes. bool,
};

export default Artwork;
