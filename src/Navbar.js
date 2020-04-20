import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import './Navbar.css';

export default class Navbar extends Component {
	render() {
		const { level, changeLevel, handleChange, format } = this.props;
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="#">reactcolorpicker</a>
				</div>
				<div className="slider-container">
					<span>Lelvel: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA = rbba(255,255,255, 1.0)</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}
