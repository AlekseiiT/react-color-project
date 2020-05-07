import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
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
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.name} name={color.name} showingFullPalette={false} background={color[format]} />
		));

		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} format={format} showingAllColors={false} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>GO BACK!</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
