import React from 'react';
import {
	Image,
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Avatar from '../Avatar';


const ButtonCard = ({avatar,sex,text,onPress})=>{
	return(
		<TouchableOpacity
			onPress = {()=>onPress()}
		>
			<View style={styles.ctn}>
				<Avatar 
					avatar = {avatar}
					sex = {sex}
					size = {35}
				/>
				<Text style={styles.text}>{text}</Text> 
			</View>      	
		</TouchableOpacity>
	)
}

ButtonCard.propTypes = {
	avatar : PropTypes.string.isRequired,
	sex : PropTypes.string.isRequired,
	text : PropTypes.string.isRequired,
	onPress : PropTypes.func.isRequired
}

export default ButtonCard