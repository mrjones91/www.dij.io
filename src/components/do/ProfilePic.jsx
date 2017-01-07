import React from 'react';
import Avatar from 'material-ui/Avatar';
import {} from '../../styles/index.css';

const style = {
	borderRadius: '50%'
}

export default function() {
	return (
		<img
			className="profile"
			src="http://res.cloudinary.com/dijital-technologies/image/upload/v1483788140/self/turnt.jpg"
			style={style}
		/>
	)
}