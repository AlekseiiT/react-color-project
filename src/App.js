import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from './Palette';
import PaletteList from './PaletteList';
import Page from './Page';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savedPalettes || seedColors
		};
	}
	findPalette(id) {
		return this.state.palettes.find((el) => el.id === id);
	}
	savePalette = (newPalette) => {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	};
	deletePalette = (id) => {
		this.setState((st) => ({ palettes: st.palettes.filter((p) => p.id !== id) }), this.syncLocalStorage);
	};
	syncLocalStorage = () => {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	};
	render() {
		return (
			<div className="App">
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition key={location.key} classNames="page" timeout={500}>
								<Switch location={location}>
									<Route
										exact
										path="/palette/new"
										render={(routeProps) => (
											<Page>
												<NewPaletteForm
													savePalette={this.savePalette}
													{...routeProps}
													palettes={this.state.palettes}
												/>
											</Page>
										)}
									/>
									<Route
										exact
										path="/"
										render={(routeProps) => (
											<Page>
												<PaletteList
													palettes={this.state.palettes}
													deletePalette={this.deletePalette}
													{...routeProps}
												/>
											</Page>
										)}
									/>
									<Route
										exact
										path="/palette/:id"
										render={(routeProps) => (
											<Page>
												<Palette
													palette={generatePalette(
														this.findPalette(routeProps.match.params.id)
													)}
												/>
											</Page>
										)}
									/>
									<Route
										exact
										path="/palette/:paletteId/:colorId"
										render={(routeProps) => (
											<Page>
												<SingleColorPalette
													palette={generatePalette(
														this.findPalette(routeProps.match.params.paletteId)
													)}
													colorId={routeProps.match.params.colorId}
												/>
											</Page>
										)}
									/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
				{/* <Palette palette={generatePalette(seedColors[4])} /> */}
			</div>
		);
	}
}
