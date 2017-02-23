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


class Button extends React.Component{

  constructor(props){
    super(props);

    this.hide = this.hide.bind(this);
    this.slide = this.slide.bind(this);

    this.state = {
      opacity: 1,
      transform: 10
    }
  }

  hide(){
    this.setState({opacity: 0});
  }

  slide(){
    this.setState({transform: 30});
  }

  render(){

  // Render an anchor tag
  let button = (
        <A href={this.props.href} onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} id="a">
            {Children.toArray(this.props.children)}
        </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (this.props.handleRoute) {
    button = (
      <StyledButton buttonColor={this.props.color} onClick={this.props.handleRoute} id="b">
        {Children.toArray(this.props.children)}
      </StyledButton>
    );
  }

  // Check for mouseover

  var visible = "1";

  if (!this.props.visible){
    visible = "0";
  }

  var pEvents = this.state.opacity == 0 ? 'none' : 'auto';
  
    return (
        <Wrapper opacity={this.state.opacity} style={{marginLeft: this.state.transform, pointerEvents: pEvents}}>
            <ButtonOuter buttonColor={this.props.borderColor} backgroundColor={this.props.backgroundColor} hilightColor={this.props.hilightColor}>
               <A href={this.props.href} onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} id="a">
                 <ButtonInner buttonColor={this.props.textColor} onClick={this.props.handleRoute} id="b">
                   {Children.toArray(this.props.children)}
                 </ButtonInner>
               </A>
            </ButtonOuter>
        </Wrapper>
    );
  }
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
