import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		display: 'inline-block',
		width: '20%',
		height: '25%',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4.5px'
	}
};

function DraggableColorBox(props) {
	return (
		<div className={props.classes.root} style={{ backgroundColor: props.color }}>
			{props.color}
		</div>
	);
}

export default withStyles(styles)(DraggableColorBox);
