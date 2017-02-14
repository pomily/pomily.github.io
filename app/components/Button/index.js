/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

import A from './A';
import Wrapper from './Wrapper';

import ButtonInner from './ButtonInner';
import ButtonOuter from './ButtonOuter';

import Img from './Img';


function Button(props) {
  // Render an anchor tag
  let button = (
        <A href={props.href} onClick={props.onClick} onMouseOver={props.onMouseOver} id="a">
            {Children.toArray(props.children)}
        </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton buttonColor={props.color} onClick={props.handleRoute} id="b">
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  // Check for mouseover

  var visible = "1";

  if (!props.visible){
    visible = "0";
  }

  return (
      <Wrapper>
          <ButtonOuter buttonColor={props.borderColor} backgroundColor={props.backgroundColor} hilightColor={props.hilightColor}>
             <A href={props.href} onClick={props.onClick} onMouseOver={props.onMouseOver} id="a">
               <ButtonInner buttonColor={props.textColor} onClick={props.handleRoute} id="b">
                 {Children.toArray(props.children)}
               </ButtonInner>
             </A>
          </ButtonOuter>

      </Wrapper>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  hover: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
