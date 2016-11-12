/**
 *
 * Logo.react.js
 *
 * Renders an Logo, enforcing the usage of the alt="" tag
 */

import React from 'react';

import A from './A';
import Img from './Img';
import Container from './Container';
import Group from './Group';
import LogoImg from './logo-top.svg';
import LogoText from './logo-bottom.svg';

function Logo(props) {
	return (
		<div>
			<Container>
				<Group>
					<A href="#">
						<Img src={LogoImg} alt="ARK Studio - Logo" />
						<Img src={LogoText} alt="description" />
					</A>
				</Group>
			</Container>
		</div>
	);
}

export default Logo;