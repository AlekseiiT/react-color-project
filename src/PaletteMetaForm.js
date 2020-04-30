import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 'form',
			newPaletteName: ''
		};
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
			return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
		});
	}
	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	showEmojiPicker = () => {
		this.setState({ stage: 'emoji' });
	};
	savePalette = ({ native }) => {
		const newPalette = { paletteName: this.state.newPaletteName, emoji: native };
		this.props.handleSubmit(newPalette);
	};
	render() {
		const { handleSubmit, hideForm } = this.props;
		const { newPaletteName, open } = this.state;
		return (
			<div>
				<Dialog open={this.state.stage === 'emoji'}>
					<DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
					<Picker title="Choose an emoji" onSelect={this.savePalette} />
				</Dialog>
				<Dialog open={this.state.stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
					<ValidatorForm onSubmit={this.showEmojiPicker}>
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
							<Button onClick={hideForm} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
