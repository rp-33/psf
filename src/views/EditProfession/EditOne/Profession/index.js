import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';

const Profession = ({text,profession,handleSelect})=>{

	const url = (img)=>{

		switch (img) {
        	case 'diseñador':
        		return (require('../../../../assets/images/disenador.png'));
        	case 'programador':
        		return (require('../../../../assets/images/programador.png'));
        	case 'medico':
        		return (require('../../../../assets/images/medico.png'));
        	case 'ingeniero':
        		return (require('../../../../assets/images/ingeniero.png'));
        	case 'arquitecto':
        		return (require('../../../../assets/images/arquitecto.png'));
        	default:
            	return (require('../../../../assets/images/logo.png'));
        }
	}


	return(
		<TouchableOpacity
			onPress = {()=>handleSelect(text)}
		>
		<View style={styles.ctn}>
			{profession === text &&
				<View style={styles.ctnIcon}>
					<Icon name="check" 
					 	color="white"
					 	size = {10}
					/>
				</View>
			}
			<Image 
			 	style = {styles.img}
			 	source ={url(text)} 
			/>
			<Text>{text}</Text>
		</View>
		</TouchableOpacity>
	)
}

Profession.propTypes = {
	text : PropTypes.string.isRequired,
	profession : PropTypes.string,
	handleSelect : PropTypes.func.isRequired
}

export default Profession;