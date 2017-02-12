/**
 *
 * Logo.react.js
 *
 * Renders an Logo, enforcing the usage of the alt="" tag
 */

import React from 'react';

import Container from './Container';
import A from './A';
import Img from './Img';
import Group from './Group';
import HeaderLogo from './header_logo.svg';


function SearchBar(props) {
  	var visible = "1";
	return (
		<Container>
			<Group>
				<A href="#">
					<Img opacity={visible} src={HeaderLogo} alt="Pomily - Logo" />
				</A>
			</Group>
		</Container>
	);
}

export default SearchBar;