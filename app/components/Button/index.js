/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';
import ButtonBackground from './ButtonBackground';
import ButtonIcon from './ButtonIcon';
import ExploreButton from './ExploreButton.png';
import ExploreButtonLit from './ExploreButtonLit.png';
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
      <StyledButton  onClick={props.handleRoute} src={ExploreButton} id="b">
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  // Check for mouseover
  var iconTranslation = 5;
  var iconSrc = ExploreButton;
  if (props.hover){
      iconTranslation = -5;
      iconSrc = ExploreButtonLit;
  }

  var visible = "1";

  if (!props.visible){
    visible = "0";
  }

  return (
      <Wrapper opacity={visible}>
          <IconWrapper translation={iconTranslation}>
            <Img src={iconSrc} alt="Button Icon"/>
          </IconWrapper>
          <ButtonIcon>
             <A href={props.href} onClick={props.onClick} onMouseOver={props.onMouseOver} id="a">
                {Children.toArray(props.children)}
             </A>
          </ButtonIcon>

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
