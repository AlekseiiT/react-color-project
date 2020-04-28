import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			palettes: seedColors
		};
	}
	findPalette(id) {
		return this.state.palettes.find((el) => el.id === id);
	}
	savePalette = (newPalette) => {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] });
	};

	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/palette/new"
						render={(routeProps) => (
							<NewPaletteForm
								savePalette={this.savePalette}
								{...routeProps}
								palettes={this.state.palettes}
							/>
						)}
					/>
					<Route
						exact
						path="/"
						render={(routeProps) => <PaletteList {...routeProps} palettes={this.state.palettes} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:colorId"
						render={(routeProps) => (
							<SingleColorPalette
								palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
								colorId={routeProps.match.params.colorId}
							/>
						)}
					/>
				</Switch>
				{/* <Palette palette={generatePalette(seedColors[4])} /> */}
			</div>
		);
	}
}
