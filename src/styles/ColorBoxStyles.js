import chroma from 'chroma-js';
import sizes from './sizes';

export default {
	ColorBox: {
		display: 'inline-block',
		width: '20%',
		height: (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4.5px',
		'&:hover button': {
			opacity: 1,
			transition: '0.5s'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: (props) => (props.showingFullPalette ? '20%' : '50%')
		},
		[sizes.down('md')]: {
			width: '50%',
			height: (props) => (props.showingFullPalette ? '10%' : '50%')
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: (props) => (props.showingFullPalette ? '5%' : '10%')
		}
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.8 ? 'white' : 'rgba(0, 0, 0, 0.5)')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white'),
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		border: 'none',
		right: '0px',
		bottom: '0px',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase',
		fontWeight: '400'
	},
	copyButton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white'),
		width: '100px',
		height: '30px',
		display: 'inline-block',
		position: 'absolute',
		left: '50%',
		top: '50%',
		marginTop: '-15px',
		marginLeft: '-50px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		textDecoration: 'none',
		opacity: '0'
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transition: 'transform 1s ease',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute'
	},
	copyMessage: {
		position: 'fixed',
		top: '0',
		right: '0',
		left: '0',
		bottom: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: '0',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem',
			textTransform: 'uppercase'
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showMessage: {
		opacity: '1',
		transform: 'scale(1)',
		zIndex: '25',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s'
	}
};
