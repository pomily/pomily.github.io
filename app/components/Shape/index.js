/**
 *
 * StepAnimation.react.js
 *
 */

import React, { PropTypes, Children } from 'react';

import Container from './Container';
import Img from './Img';
import Vector from './splash-vector-white.svg';


function Shape(props) {
  return (
    <Container>
      <Img src={Vector}/>
    </Container>

  );
}

Container.propTypes = {
  hover: PropTypes. bool,
};

export default Shape;
