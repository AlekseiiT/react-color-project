import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	colors: {
		backgroundColor: 'grey'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		parginLeft: '0.5rem',
		fontSize: '1.5'
	}
};

const MiniPalette = (props) => {
	const { classes, paletteName, emoji, id } = props;

	return (
		<div className={classes.root}>
			<div className={classes.colors}>
				<p>colors here!</p>
			</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
			<Link to={`/palette/${id}`}>To to palette</Link>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);