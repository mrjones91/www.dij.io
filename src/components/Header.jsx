import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import HeaderMenu from './custom/HeaderMenu.jsx';
	
	let styles = {
		barStyle: {
			color: 'black',
			backgroundColor: 'white',
			position: 'fixed',
			top: '0px'
		},
		contentStyle: {
			marginTop: '15px'
		},
		iconStyle: {
			marginTop: '5px',
			width: '75px'
		}
	}

export default class Header extends Component {

	constructor(props) {
    	super(props);
    	this.state = {width: window.innerWidth};
  	}

	
	render() {

		return (
			<div>
				<AppBar title={<a href="/#do"> <img src='http://res.cloudinary.com/dijital-technologies/image/upload/v1453853654/dij/favicon.png' style={ styles.iconStyle } role="presentation" /> </a>} 
						style={ styles.barStyle } 
						iconElementRight={<HeaderMenu size={this.state.width} />} > 
					<div style={ styles.contentStyle }>
						
					</div>
				</AppBar>
			</div>
			);
	}
}