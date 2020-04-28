import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}
	changeFormat(evt) {
		this.setState({ format: evt });
	}

	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				key={color.id}
				background={color[format]}
				name={color.name}
				moreUrl={`/palette/${id}/${color.id}`}
				showingFullPalette
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar
					changeLevel={this.changeLevel}
					level={level}
					handleChange={this.changeFormat}
					format={format}
					showingAllColors
				/>
				<div className={classes.colors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(Palette);
