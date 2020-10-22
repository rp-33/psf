import React from 'react';
import {
	Image,
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const ButtonCard = ({image,text,onPress})=>{

	const url = (img)=>{
		switch (img) {
        	case 'comenzar':
        		return (require('../../assets/images/comenzar.png'));
        	case 'telefono-movil':
        		return (require('../../assets/images/telefono-movil.png'));
        	case 'ubicacion':
        		return (require('../../assets/images/ubicacion.png'));
        	case 'certificado':
        		return (require('../../assets/images/certificado.png'));
        	case 'contrato':
        		return (require('../../assets/images/contrato.png'));
        	case 'contrasena':
        		return (require('../../assets/images/contrasena.png'));
        	case 'logout':
        		return (require('../../assets/images/logout.png'));
        	case 'camera':
        		return (require('../../assets/images/camera.png'));
        	case 'sugerencias':
        		return (require('../../assets/images/sugerencias.png'));
        	default:
            	return (require('../../assets/images/logo.png'));
        }
	}
	return(
		<TouchableOpacity
			onPress = {()=>onPress()}
		>
			<View style={styles.ctn}>
				<Image 
			 		style = {styles.img}
			 		source ={url(image)} 
				/>
				<Text>{text}</Text> 
			</View>      	
		</TouchableOpacity>
	)
}

ButtonCard.propTypes = {
	image : PropTypes.string.isRequired,
	text : PropTypes.string.isRequired,
	onPress : PropTypes.func.isRequired
}

export default ButtonCard