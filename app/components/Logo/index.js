/**
 *
 * Logo.react.js
 *
 * Renders an Logo, enforcing the usage of the alt="" tag
 */

import React from 'react';

import A from './A';
import Img from './Img';
import LogoImg from './logo-top.png';
import LogoText from './logo-bottom.png';

function Logo(props) {
	return (
		<div>
			<A href="#">
				<Img src={LogoImg} alt="ARK Studio - Logo" />
				<Img src={LogoText} alt="description" />
			</A>
		</div>
	);
}

export default Logo;