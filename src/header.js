import React, { Component } from 'react';
import "./assets/header.css";

class Navbar extends Component {
	render() {
		function navRes() {
			let x = document.getElementsByClassName("navElements");
			for (var i = 0; i < x.length; i++) {
				x[i].classList.toggle("hide");
				x[i].classList.toggle("show");
			}
			document.getElementById("line1").classList.toggle("moveLine1");
			document.getElementById("line2").classList.toggle("moveLine2");
			document.getElementById("line3").classList.toggle("moveLine3");
		}
		return (
			<div id="navbar">
				<div id="navbox">
					<div id="hamburger" onClick={navRes}>
						<span id="line1"></span>
						<span id="line2"></span>
						<span id="line3"></span>
					</div>
					<div className="navElements hide"><a href="#"> Home </a></div>
					<div className="navElements hide"><a href="#"> Work </a></div>
					<div className="navElements hide"><a href="#"> Services </a></div>
					<div className="navElements hide"><a href="#"> About Me </a></div>
				</div>
			</div>
		);
	}
}

export default Navbar;