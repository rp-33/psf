import React,{useState} from 'react';
import {
	View,
	TouchableOpacity,
	TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';
import {color} from '../../../theme';
import styles from './styles';

const Input = ({handleSend})=>{

	const [text,setText] = useState('');

	const handleSendMessage = ()=>{
		handleSend(text);
		setText('');
	}

		return(
			<View style={styles.ctn}>
				<View style={styles.ctnInput}>
					<TextInput
						placeholder = "Escribe un comentario..."
						placeholderTextColor = "black"
						value = {text}
						onChangeText = {(text)=>setText(text)}
						multiline
					/>
            	</View>
            	<TouchableOpacity 
            		activeOpacity = {0.5}
            		onPress = {(text !=='' && text.length!=null) ? handleSendMessage : null}
            		style={styles.btn}
            	>
            		<Icon name="sc-telegram" color={color.primary} size={35}/>
           		</TouchableOpacity>
			</View>
		)
	
}

Input.propTypes = {
	handleSend : PropTypes.func.isRequired
}


export default Input;