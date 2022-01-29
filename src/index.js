import React, { Component } from 'react';
import ReactDom from "react-dom";
import Navbar from "./header.js";
import Footer from "./footer.js";
import Illustration1 from './illustration1.js';

import "./assets/index.css";

ReactDom.render(<Navbar />, document.getElementById("navbar-react"));
ReactDom.render(<Footer />, document.getElementById("footer-react"));
ReactDom.render(<Illustration1 />, document.getElementById("illustration1-svg-react"));
