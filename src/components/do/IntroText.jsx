import React from 'react';

const styles = {
	linkedin: {
		marginLeft: '5px'
	}
}

export default function() {
	return (
		<div>
			<p>
				I provide:<br/>
				<a href="https://www.dijitalacademy.org" target="_blank">Coding</a> Workshops
				<br/>
				Online <a href="https://www.dijitalacademy.org/treehouse" target="_blank" title="Learn to Code Online with TeamTreehouse"> Courses</a>
				<br/>
				& <a href="https://dijitech.store">Electonics</a>
				<br/><br/>
				I am:<br/>
				Food Lover 🍱; <br/> Getting Stronger 💪🏾; <br/> Musical Pro 🎷; <br/>
				<br/><br/>
				Daniel I. Jones (DJ)
			</p>
			<p> Journey with me:    
				<a href="https://twitter.com/dij_plz" title="Follow Me on Twitter">
	              <img width="48" src="http://res.cloudinary.com/dijital-technologies/image/upload/v1461203705/icons/twit.png" role="presentation"/>
	            </a>
				<a href="https://instagram.com/dij_plz" title="Follow Me on The Gram">
	             <img width="50" src="http://res.cloudinary.com/dijital-technologies/image/upload/v1461203705/icons/ig.png" role="presentation"/>
	            </a>
	            <a href="https://github.com/mrjones91" title="My Github Code Repository">
	              <img width="45" src="http://res.cloudinary.com/dijital-technologies/image/upload/v1483792877/icons/GitHub.png" role="presentation"/>
	            </a>
	             <a href="https://www.linkedin.com/in/djones20" title="My LinkedIn Profile" style={ styles.linkedin }>
	              <img width="45" src="http://res.cloudinary.com/dijital-technologies/image/upload/v1484034316/icons/linkedin.png" role="presentation"/>
	            </a>
	             <a href="http://resume.dij.io" title="My Resume" target="_blank">
	              <img width="50" src="http://res.cloudinary.com/dijital-technologies/image/upload/v1484034300/icons/resume.png" role="presentation"/>
	            </a>
			</p>
		</div>
		)
}