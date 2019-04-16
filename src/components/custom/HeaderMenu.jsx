import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import FlatButton from 'material-ui/FlatButton';


let headerLinks = [
		{
			href: 'https://www.dijitalacademy.org',
			name: 'Learn to Code'
		}, 
		{
			href: 'mailto:music@dij.io',
			name: 'Hire a Saxophonist'
		},
		{
			href: 'mailto:liftBig@dij.io',
			name: 'Get Stronger'
		},
		{
			href: 'mailto:daniel@dij.io',
			name: 'Email Me'
		}
	];

export default class HeaderMenu extends Component {

	renderButtons() {
		return (
			<div>
				{
					headerLinks.map(function(element) {
						return (
							<a key={element.href} href={element.href}> 
								<FlatButton label={element.name}/>
							</a>
							)
					})
				}
			</div>
		)
	} 

	renderMenu() {
		return (
				<IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>} >
				{ 
					headerLinks.map(function(element) {
						return (
							<a href={element.href} key={element.href}> 
								<MenuItem primaryText={element.name}/>
							</a>
							)
					})
				}
				</IconMenu>
			)
	}
	render() {
		return (
			<div>
			{this.props.size > 500 ? this.renderButtons() : this.renderMenu() }
			</div>
			)		
	}
}