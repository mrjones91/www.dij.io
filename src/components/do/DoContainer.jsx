import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import ProfilePic from './ProfilePic.jsx';
import IntroText from './IntroText.jsx';
import {} from '../../styles/index.css';

const styles = {
	div: {
		height: '50vh',
		marginTop: '64px',
		textAlign: 'center'
	},
	list: {
		width: '100%',
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
			<div id="do">
				
				<div style={styles.div}>
					<IntroText/>
					<div style={styles.tile} id='picRoot'> <ProfilePic pic={this}/> </div>
					{/* this.setState({pic: document.getElementById('picRoot') }) */}
				</div> 
				
				{/* <GridList
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

				</GridList> */}
				
			</div>
			)
	}
}