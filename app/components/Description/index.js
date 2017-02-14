/**
 *
 * Logo.react.js
 *
 * Renders an Logo, enforcing the usage of the alt="" tag
 */

import React from 'react';

import A from './A';
import Img from './Img';
import Group from './Group';
import LogoImg from './pomily-logo-shaded.png';
import SplashIcons from './splash-icons.svg';
import Title from './Title';
import Body from './Body';
import Button from './Button';

function Description(props) {

  var graphic;
  var graphic_height;
  var heading_text;
  var body_text;
  var main_color;
  var body_color;


  const content_json = '{ '+

    '  "header" : [' +
    ' "Share the joy of makeup" ,' +
    ' "Explore, shop, and share"  ],'+

    '  "description" : [' +
    ' "Lorem ipsum dolor sit amet, per eu amet labores. Vix ad augue facete appellantur, nec facer lobortis at, nominavi perpetua expetenda sea ut. No ubique discere." ,' +
    ' "Accusam oporteat deseruisse at est, ne eum omnis docendi partiendo. Per ut minim utroque docendi, et mel persius praesent intellegat. Vix ad augue facete." ]}'
  ;

  var content = JSON.parse(content_json);

  if (props.slide=="first"){
    graphic = LogoImg;
    graphic_height = 120;
    heading_text = content.header[0];
    body_text = content.description[0];
    main_color = "#E5B5D1";
    body_color = "#C7B4AC";
  }
  else{
    graphic = SplashIcons;
    graphic_height = 120;
    heading_text = content.header[1];
    body_text = content.description[1];
    main_color = "#FFFFFF";
    body_color = "#FFFFFF";
  }


	return (
			<Group>
				<A href="#">
					<Img src={graphic} height={graphic_height} alt={"Pomily"}/>
				</A>
        <Title color={main_color}>{heading_text} </Title>
        <Body color={body_color}>{body_text}</Body>
			</Group>
	);
}

export default Description;
