import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
render() {
	return (
	<div className="header">
	    <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
	</div>
	);
}
}

export default Header;