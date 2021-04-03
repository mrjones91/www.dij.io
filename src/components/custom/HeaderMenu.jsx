import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import FlatButton from 'material-ui/FlatButton';


let headerLinks = [
		// {
		// 	href: '',
		// 	name: ''
		// },
		{
			href: 'http://kingstrengthgym.com',
			name: 'Get Strong'
		},
		{
			href: 'https://docs.google.com/document/d/1ghr-5tZccbFrP3-p9FOHsX75phcyEYsXMJCdarTpigY/edit?usp=sharing',
			name: 'Learn About Crypto'
		}, 
		{
			href: 'mailto:music@dij.io',
			name: 'Book a Saxophonist'
		},
		{
			href: 'https://gumroad.com/l/dijcode',
			name: 'Learn to Code'
		}, 
		{
			href: 'mailto:daniel@dij.io',
			name: "Let's Build Something"
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