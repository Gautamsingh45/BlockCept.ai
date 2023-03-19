import React, { Component } from 'react';
import './Logo.css';
import img from './image/Blockcept1.png';

class Logo extends Component {
render() {
	return (
	<div className="logo">
	    <img src={img} alt='not Showing' width="200px" height="100px"></img>
	</div>
	); 
}
}

export default Logo;