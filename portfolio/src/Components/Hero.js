import React, { Component } from 'react';
// import background from "./hand-painted.jpg";




class Hero extends Component {
render() {
	const myStyle={
        backgroundImage: "./caliview.jpg",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
	return (
	<div style={myStyle}>
		<h1>GeeksForGeeks</h1>
	</div>
	);
}
}

export default Hero;

