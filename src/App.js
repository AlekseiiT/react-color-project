import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				{console.log(generatePalette(seedColors[4]))}
				<Palette {...seedColors[1]} />
			</div>
		);
	}
}
