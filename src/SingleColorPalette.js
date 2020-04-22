import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex' };
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.changeFormat = this.changeFormat.bind(this);
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		const allColors = palette.colors;
		for (const key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	}
	changeFormat(evt) {
		this.setState({ format: evt });
	}
	render() {
		const { format } = this.state;
		const { paletteName, emoji } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.id} name={color.name} showLink={false} background={color[format]} />
		));

		return (
			<div className="Palette">
				<Navbar handleChange={this.changeFormat} format={format} showingAllColors={false} />
				<h1>Single Color Palette</h1>
				<div className="Palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
