/**
 *
 * StepAnimation.react.js
 *
 */

import React, { PropTypes, Children } from 'react';

import Container from './Container';
import Img from './Img';
import ArtworkA from './splashart-a.png';
import ArtworkB from './splashart-b.png';
import Shape from './splash-vector.svg';


function Artwork(props) {
  var source;
  if (props.slide == "first"){
      source = ArtworkA;
  }
  else{
    source = ArtworkB;
  }
  return (
    <Container>
      <Img src={source} mask={Shape}/>
    </Container>

  );
}

Container.propTypes = {
  hover: PropTypes. bool,
};

export default Artwork;
