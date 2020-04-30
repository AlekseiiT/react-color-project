import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPaletteName: ''
		};
	}

	handleClose = () => {
		this.props.showForm(false);
	};
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
			return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
		});
	}
	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	render() {
		const { handleSubmit, showForm } = this.props;
		const { newPaletteName, open } = this.state;
		return (
			<Dialog open={showForm} onClose={this.handleClose} aria-labelledby="form-dialog-title">
				<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your new beautiful palette. Make sure it's unique!
						</DialogContentText>

						<TextValidator
							value={newPaletteName}
							label="Palette Name"
							name="newPaletteName"
							onChange={this.handleChange}
							fullWidth
							margin="normal"
							validators={[ 'required', 'isPaletteNameUnique' ]}
							errorMessages={[ 'Enter a palette name', 'Name already used' ]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		);
	}
}

export default PaletteMetaForm;
