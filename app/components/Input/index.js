/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

import Wrapper from './Wrapper';


function Input(props) {
  return (
      <Wrapper>
          <input width={props.width} ></input>
      </Wrapper>
  );
}


export default Input;
