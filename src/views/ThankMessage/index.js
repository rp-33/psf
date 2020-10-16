import React from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';
import {Container} from 'native-base';
import Head from '../../components/Head';
import Button from '../../components/Button';
import styles from './styles';

const ThankMessage = ({navigation})=>{
	return(
		<Container>
			<Head />
			<View style={styles.ctn}>
				<View style={styles.ctnText}>
					<Text style={styles.text}>Gracias por tu ayuda...</Text>
				</View>
				<Image 
					source ={require('../../assets/images/ayudar.png')} 
					style = {styles.img}
				/> 
			</View>
			<View style={styles.btn}>
				<Button 
					title = "Ir al inicio"
					onPress = {()=>navigation.pop(2)}
				/>
			</View>
		</Container> 

	)
}

export default ThankMessage;