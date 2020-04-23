import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '88%'
	},
	goBack: {
		display: 'inline-block',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4.5px',
		opacity: 1,
		backgroundColor: 'black',
		'& a': {
			color: 'white',
			width: '100px',
			height: '30px',
			display: 'inline-block',
			position: 'absolute',
			left: '50%',
			top: '50%',
			marginTop: '-15px',
			marginLeft: '-50px',
			textAlign: 'center',
			outline: 'none',
			background: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			lineHeight: '30px',
			textTransform: 'uppercase',
			border: 'none',
			textDecoration: 'none'
		}
	}
};

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
