import React from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';
import styles from './styles';

const Message = ()=>{
	return(
		<View style={styles.ctn}>
			<Image 
			 	style = {styles.image}
			 	source ={require('../../../../assets/images/photo-capture.png')} 
			/>
			<View>
				<Text>Agrega imagenes al proyecto pulsando el icono mas</Text>
			</View>
		</View>
	)
}

export default Message;

