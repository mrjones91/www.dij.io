import React from 'react';
import Avatar from 'material-ui/Avatar';
import {} from '../../styles/index.css';

const style = {
	borderRadius: '50%'
}

const pics = [
'http://res.cloudinary.com/dijital-technologies/image/upload/e_brightness:-7/v1518888223/dij/image4.jpg',
'http://res.cloudinary.com/dijital-technologies/image/upload/v1518888244/dij/image1.jpg',
'http://res.cloudinary.com/dijital-technologies/image/upload/v1515965939/IMG_20180103_183258_wktbqf.jpg'
]

export default function() {
	return (
		<img
			id="profilePic"
			className="profile"
			src={pics[0]}
			style={style}
		/>
	)
}