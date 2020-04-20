import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
	findPalette(id) {
		return seedColors.find((el) => el.id === id);
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <h1>Palette goes here</h1>} />
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
						)}
					/>
				</Switch>

				{console.log(generatePalette(seedColors[4]))}
				{/* <Palette palette={generatePalette(seedColors[4])} /> */}
			</div>
		);
	}
}
