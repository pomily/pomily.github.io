
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

import Artwork from 'components/Artwork';
import ArtworkContainer from './ArtworkContainer';

import Shape from 'components/Shape';
import ShapeContainer from './ShapeContainer';

import SignupForm from 'components/SignupForm';

import ScrollLayer from './ScrollLayer';
import ContentContainer from './ContentContainer';

import BottomLayer from './BottomLayer';
import TopLayer from './TopLayer';

import LayerMask from './splash-vector.svg';
import MobileMask from './splash-vector-mobile.svg';

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
        backgroundOpacity: 1,
        labelOpacity: 1,
        slide: 0,
        topVisiblity: 1,
        width: 0,
    };
    this.updateDimensions =  this.updateDimensions.bind(this);
    this.hoverAnimation = this.hoverAnimation.bind(this);
    this.outAnimation = this.outAnimation.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.animateSignUp = this.animateSignUp.bind(this);
  }
  updateDimensions() {
    this.setState({width: $(window).width()});
  }
  componentWillMount(){
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
      window.addEventListener('resize', () => this.forceUpdate())//triggers a state change whenever the display size is altered

      //scrolling triggers
      var lastScrollTop = 0;
      var scrollDown = false;
      window.addEventListener('scroll', function(){

        var st = window.pageYOffset || document.documentElement.scrollTop;

        //triggers slide changes only when scrolling direction changes
        if (st > lastScrollTop){
          if(!scrollDown){
            this.changeSlide();
            scrollDown = true;
          }
        } else {
          if(scrollDown){
            this.changeSlide();
            scrollDown = false;
          }
        }
        lastScrollTop = st;

      }.bind(this));

  }
  hoverAnimation(){
    this.setState({hover: true});
  }
  outAnimation(){
    //alert("bye");
  }
  checkBrowser(){
    var c = navigator.userAgent.search("Chrome");
    var f = navigator.userAgent.search("Firefox");
    var m8 = navigator.userAgent.search("MSIE 8.0");
    var m9 = navigator.userAgent.search("MSIE 9.0");
    var browser = "Chrome";
    if (c > -1) {
        browser = "Chrome";
    } else if (f > -1) {
        browser = "Firefox";
    } else if (m9 > -1) {
        browser ="MSIE 9.0";
    } else if (m8 > -1) {
        browser ="MSIE 8.0";
    }
    return browser;
  }
  changeSlide(){
    if (this.checkBrowser() == "Firefox" || document.documentElement.clientWidth < 530){
      if (this.state.topVisiblity == 1){
        this.setState({topVisiblity:0});
      }
      else {
        this.setState({topVisiblity:1});
      }
    }
    else{
      if (this.state.slide == 0){
        this.setState({slide:1});
      }
      else {
        this.setState({slide:0});
      }
    }
  }
  scrollAnimation(event){
    //alert("bye");
  }

  animateSignUp(){
    this.refs.btnLeft.hide();
    this.refs.btnRight.hide();
    this.refs.form.show();
  }

  render() {

  	const href = '#';
  	const children = (<h3>E X P L O R E</h3>);
    var maskPosition =  90;
    var maskImage;

    if (document.documentElement.clientWidth > 1400){
      maskImage = LayerMask;
      if (this.state.slide ==  0)
        maskPosition = "30%";
      else
        maskPosition = "80%";
    }
    else if (document.documentElement.clientWidth > 900){
      maskImage = LayerMask;
      if (this.state.slide ==  0)
        maskPosition = "25%";
      else
        maskPosition = "80%";
    }
    else if (document.documentElement.clientWidth > 730){
      maskImage = LayerMask;
      if (this.state.slide ==  0)
        maskPosition = "10%";
      else
        maskPosition = "80%";
    }
    else if (document.documentElement.clientWidth > 530){
      maskImage = MobileMask;
      if (document.documentElement.clientHeight > 900){
        if (this.state.slide ==  0)
          maskPosition = "20%";
        else
          maskPosition = "100%";
      }
      else{
        if (this.state.slide ==  0)
          maskPosition = "30%";
        else
          maskPosition = "100%";
      }
    }
    else{
      maskImage = MobileMask;
      if (document.documentElement.clientHeight > 900){
          if (this.state.slide ==  0)
            maskPosition = "-10%";
          else
            maskPosition = "200%";
      }
      else if (document.documentElement.clientHeight > 800){
          if (this.state.slide ==  0)
            maskPosition = "0%";
          else
            maskPosition = "130%";
      }
      else if (document.documentElement.clientHeight > 700){
          if (this.state.slide ==  0)
            maskPosition = "10%";
          else
            maskPosition = "110%";
      }
      else{
        if (this.state.slide ==  0)
          maskPosition = "3%";
        else
          maskPosition = "100%";
      }
    }

    return (

    	<article>

    		<Helmet
    			title="Pomily"
    			meta={[
    				{ name: 'description', content: 'Cosmetics Ecommerce' }
    			]}/>
    		<div>

          <Background opacity={this.state.backgroundOpacity}>

            <HeaderContainer>
              <HeaderBar/>
            </HeaderContainer>

            {/*<ScrollLayer />*/}

            <ContentContainer>
            <TopLayer opacity={this.state.topVisiblity} mask={maskImage} maskPosition={maskPosition}>

                  <DescriptionContainer onMouseOver={this.outAnimation}>
                     <Description slide="first" />
                  </DescriptionContainer>

                  <ButtonContainer onMouseOver={this.outAnimation}>
                    <Button onClick={this.changeSlide} ref="btnLeft"
                            textColor="#FFFFFF" borderColor="#E5B5D1" hilightColor="#C78BB6" backgroundColor="#E5B5D1">MORE</Button>
                    <Button onClick={this.animateSignUp} ref="btnRight"
                            textColor="#E5B5D1" borderColor="#E5B5D1" hilightColor="#F7E7F2" backgroundColor="#fffbf9">SIGN UP</Button>
                    <SignupForm ref="form" />
                  </ButtonContainer>

                  <ArtworkContainer>
                    <Artwork slide="first"/>
                  </ArtworkContainer>

            </TopLayer>

            <BottomLayer  >

                    <DescriptionContainer onMouseOver={this.outAnimation}>
        			         <Description slide="second"/>
                    </DescriptionContainer>

                    <ButtonContainer onMouseOver={this.outAnimation}>
                      <Button onClick={this.changeSlide} textColor="#FFFFFF" borderColor="#FFFFFF" hilightColor="#E296C7" backgroundColor="#E7BBD5">BACK</Button>
                      <Button textColor="#FFFFFF" borderColor="#FFFFFF" hilightColor="#E296C7" backgroundColor="#E7BBD5">SIGN UP</Button>
                    </ButtonContainer>

                    <ArtworkContainer>
                      <Artwork slide="second"/>
                    </ArtworkContainer>


            </BottomLayer>

            </ContentContainer>

          </Background>

    		</div>
    	</article>
    );
  }
}

                    // <Button href={href}>
                    //     {children}
                    // </Button>
