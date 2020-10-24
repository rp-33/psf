import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {color} from '../../../theme';
import PropTypes from 'prop-types';
import styles from './styles';
import Avatar from '../../../components/Avatar';

const Card = ({item,handleNavigation})=>{

	const url= (type)=>{
		switch (type) {
			case 'comment':
				return (require('../../../assets/images/comentario.png'));
			case 'donation':
				return (require('../../../assets/images/donacion.png'));
			default:
				return (require('../../../assets/images/logo.png'));
		}
	}

	const handleSelect = (type)=>{
		if(type === 'comment')
		{
			handleNavigation('Comments',{_id:item.ref_id,user_id:item.my_user});
		}
		else if(type === 'donation')
		{
			handleNavigation('InformationProject',{_id:item.ref_id});
		}
	}

	return(
	<TouchableNativeFeedback
		onPress = {()=>handleSelect(item.type)}
	>
		<View style={styles.ctn}>
			<View style={styles.ctnAvatar}>
				<Avatar
					avatar = {item.other_user.avatar}
					sex = {item.other_user.sex}
					size = {50}
				/>
				<View style={styles.ctnRight}>
					<Text style={styles.title}>{item.other_user.userName}</Text>
					<Text style={styles.message}>{item.text}</Text>
				</View>
			</View>
			<View>
				<Image 
			 		style = {styles.icon}
			 		source ={url(item.type)} 
				/>
			</View>
		</View>
	</TouchableNativeFeedback>
	)
}

Card.propTypes = {
}

export default Card;