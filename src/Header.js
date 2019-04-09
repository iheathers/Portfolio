
import React, { Component } from 'react';


import Background from './img/header-image-one.jpg';
import './Header.css'

const myStyle = {
	backgroundImage: `url(${Background})`,
	height: '80vh',
	backgroundSize: 'cover'

}

class Header extends Component{
	render(){
		return(
			<header style = {myStyle}>
				<h1>{this.props.title}</h1>
				<p>A Free Bootstrap Theme By Start Bootstrap</p>
				<button className="btn btn-primary">Find Out More</button>	
			</header>
		);
	}
};

export default Header;

