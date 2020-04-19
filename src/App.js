import React, { Component } from 'react';
import Palatte from './Palatte';
import seedColors from './seedColors';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Palatte />
			</div>
		);
	}
}
