import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import ProfilePic from './ProfilePic.jsx';
import IntroText from './IntroText.jsx';

const styles = {
	div: {
		height: '85vh',
		marginTop: '100px'
	},
	list: {
		width: '80%',
		margin: 'auto'
	},
	tile: {
		textAlign: 'center',

	}
	
}

const tilesData = [ProfilePic, IntroText];

export default class DoContainer extends Component{
	render() {
		return(
			<div id="do" style={styles.div}>
				
				<GridList
					cellHeight={'auto'}
					style={styles.list}
				>
					
				{
					tilesData.map(function(tile, index){
						return (
				        <GridTile
				          key={index}
				          style={styles.tile}
				        >
				          {tile()}
				        </GridTile>
		      		)})
				}

				</GridList>
				
			</div>
			)
	}
}