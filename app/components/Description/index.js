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
import LogoText from './logo-bottom.svg';
import Title from './Title';
import Body from './Body';
import Button from './Button';

function Description(props) {

  var visible = "1";

  if (!props.visible){
    visible = "0";

  }

	return (
			<Group>
				<A href="#">
					<Img opacity={visible} src={LogoImg} alt="ARK Studio - Logo" />
				</A>
        <Title>Share the joy of makeup </Title>
        <Body>Lorem ipsum dolor sit amet, per eu amet labores.
          Vix ad augue facete appellantur, nec facer lobortis at,
          nominavi perpetua expetenda sea ut. No ubique discere.</Body>
        <Button>EXPLORE</Button>
			</Group>
	);
}

export default Description;
