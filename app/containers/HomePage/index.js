
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
import Description from 'components/Description';
import DescriptionContainer from './DescriptionContainer';
import StepAnimation from 'components/StepAnimation';
import StepAnimationContainer from './StepAnimationContainer';
import Artwork from 'components/Artwork';
import ArtworkContainer from './ArtworkContainer';

import HeaderBar from 'components/HeaderBar';
import HeaderContainer from './HeaderContainer';
import SearchBar from 'components/SearchBar';

import Background from './Background';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-91623201-1'); //Unique Google Analytics tracking number

function fireTracking() {
    alert("click!");
    ReactGA.pageview(window.location.hash);
}

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
        hover: false,
        transitionSlide : 1,
        backgroundOpacity: 1,
        labelOpacity: 1,
    };
    this.hoverAnimation = this.hoverAnimation.bind(this);
    this.outAnimation = this.outAnimation.bind(this);
    this.transition = this.transition.bind(this);
  }
  componentDidMount() {

  }
  hoverAnimation(){
    this.setState({hover: true});
  }
  outAnimation(){
    // alert("bye");
  }
  incrementSlide(){

  }
  transition(){
    ReactGA.pageview(window.location.hash);

    this.setState({labelOpacity: 0});

    setTimeout(function() {
      this.setState({transitionSlide: this.state.transitionSlide + 1});
    }.bind(this), 200);

    this.setState({backgroundOpacity: 0});

    setTimeout(function() {
      this.setState({transitionSlide: this.state.transitionSlide + 1});
    }.bind(this), 1800);

    setTimeout(function() {
      this.setState({transitionSlide: this.state.transitionSlide + 1})
    }.bind(this), 3600);

    this.setState({hover: false});
  }
  render() {

  	const href = '#';
  	const children = (<h3>E X P L O R E</h3>);
    var hover = false;
    var hoverAnimation = (function (){
        hover = true;
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
          <Background opacity={this.state.backgroundOpacity}>

            <HeaderContainer>
               <HeaderBar/>
            </HeaderContainer>

            <DescriptionContainer onMouseOver={this.outAnimation}>
			         <Description visible={this.state.labelOpacity} />
            </DescriptionContainer>

            <ArtworkContainer>
              <Artwork/>
            </ArtworkContainer>


          </Background>


    		</div>
    	</article>
    );
  }
}

                    // <Button href={href}>
                    //     {children}
                    // </Button>
