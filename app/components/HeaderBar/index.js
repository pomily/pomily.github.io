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
import SearchBar from './SearchBar';
import Input from './Input';
import HeaderLogo from './header_logo.svg';


function HeaderBar(props) {
  	var visible = "1";
	return (
			<Group>
				<A href="#">
					<Img opacity={visible} src={HeaderLogo} alt="Pomily - Logo" />
				</A>
				<SearchBar><Input width="100%"></Input></SearchBar>
			</Group>
	);
}

export default HeaderBar;