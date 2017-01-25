
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button';
import ButtonContainer from './ButtonContainer';
import Logo from 'components/Logo';
import LogoContainer from './LogoContainer';
import StepAnimation from 'components/StepAnimation';
import StepAnimationContainer from './StepAnimationContainer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
        hover: false,
    };
    this.hoverAnimation = this.hoverAnimation.bind(this);
    this.outAnimation = this.outAnimation.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())//triggers a state change whenever the display size is altered
  }
  hoverAnimation(){
    this.setState({hover: true});
  }
  outAnimation(){
    // alert("bye");
    this.setState({hover: false});
  }
  render() {

  	const href = '#';
  	const children = (<h3>E X P L O R E</h3>);
    var hover = false;
    var hoverAnimation = (function (){
        hover = true;
    });
    var outAnimation = (function (){
        alert("bye");
    });

    return (
    	<article>
    		<Helmet
    			title="ARK Studio"
    			meta={[
    				{ name: 'description', content: 'we build cool stuff.' }
    			]}
    		/>
    		<div>

                <LogoContainer onMouseOver={this.outAnimation}>
    			    <Logo />
                </LogoContainer>

                <StepAnimationContainer onMouseOver={this.outAnimation}>
                    <StepAnimation hover={this.state.hover}/>
                </StepAnimationContainer>

    			<ButtonContainer onMouseOut={this.outAnimation}>
                    <Button href={href} onMouseOver={this.hoverAnimation} onMouseOver={this.hoverAnimation} hover={this.state.hover}>
                        {children}
                    </Button>
                </ButtonContainer>
    			

    		</div>
    	</article>
    );
  }
}
