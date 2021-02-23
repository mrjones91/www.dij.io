import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/Avatar';


const style = {
	borderRadius: '50%'
}

const pics = [
'https://res.cloudinary.com/dijital-technologies/image/upload/v1598146763/dij/COACH.jpg',
'http://res.cloudinary.com/dijital-technologies/image/upload/e_brightness:-7/v1518888223/dij/image4.jpg',
'http://res.cloudinary.com/dijital-technologies/image/upload/v1518888244/dij/image1.jpg'
]
let seconds = Math.floor(Math.random() * pics.length);
let picUrl = pics[seconds];
function tick() {
	let seconds = Math.floor(Math.random() * pics.length);
	let picUrl = pics[seconds];
	const element = (
		<img
		id="profilePic"
		className="profile"
		src={picUrl}
		style={style}
	/>
	);
	// ReactDOM.render(element, this.props.pic);
	return element;
  }
  
  setInterval(tick, 1000);
  
// function tick() {
//   const interval = setInterval(() => {
// 	seconds = Math.floor(Math.random() * pics.length);
// 	console.log(seconds + ' ' + picUrl)
// 	picUrl = pics[seconds];
//   }, 1000);
//   return () => clearInterval(interval);
// }

export default function() {
	//tick();
	return (
		tick()
		// <img
		// 	id="profilePic"
		// 	className="profile"
		// 	src={picUrl}
		// 	style={style}
		// />
	)
}

