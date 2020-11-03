import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

const Emoji = ({emotion,width,height})=>{

	const url = (emotion)=>{
		switch (emotion) {
			case 'tarde':
        		return (require('../../../assets/emojis/tarde.png'));						
			case 'abrazo':
        		return (require('../../../assets/emojis/abrazo.png'));		
			case 'llorando':
        		return (require('../../../assets/emojis/llorando.png'));
			case 'enfermo':
        		return (require('../../../assets/emojis/enfermo.png'));
			case 'riendo':
        		return (require('../../../assets/emojis/riendo.png'));
        	case 'enojado':
        		return (require('../../../assets/emojis/enojado.png'));
        	case 'enamorado':
        		return (require('../../../assets/emojis/enamorado.png'));
        	case 'genial':
        		return (require('../../../assets/emojis/genial.png'));
        	case 'conmocionado':
        		return (require('../../../assets/emojis/conmocionado.png'));
        	default:
            	return (require('../../../assets/emojis/genial.png'));
        }
	}
	return(
		<Image 
			style={{width,height}}
			source ={url(emotion)} 
		/>
	)
}

export default Emoji;
