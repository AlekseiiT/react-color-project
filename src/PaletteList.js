import React, { Component } from 'react';

import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		return <div>{palettes.map((palette) => <MiniPalette {...palette} />)}</div>;
	}
}