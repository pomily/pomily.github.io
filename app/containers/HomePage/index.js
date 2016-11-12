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
import Logo from 'components/Logo';
import StepAnimation from 'components/StepAnimation';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

  	const href = '#';
  	const children = (<h3>E X P L O R E</h3>);

    return (
    	<article>
    		<Helmet
    			title="ARK Studio"
    			meta={[
    				{ name: 'description', content: 'we build cool stuff.' }
    			]}
    		/>
    		<div>
    			<Logo />
    			<StepAnimation />
    			<Button href={href}>
    				{children}
    			</Button>
    		</div>
    	</article>
    );
  }
}
