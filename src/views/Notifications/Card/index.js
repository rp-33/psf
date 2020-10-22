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

const Card = ({item})=>{

	console.log(item)
	const iconName = (type)=>{
		switch (type) {
			case 'crowdfunding':
				return 'trophy';
			case 'like':
				return 'heart'
			case 'donation':
				return 'credit-card'
			default:
				return 'comment'
		}
	}

	const iconColor = (type)=>{
		switch (type) {
			case 'crowdfunding':
				return color.secondary;
			case 'like':
				return '#ff1744'
			case 'donation':
				return '#009688'
			default:
				return color.primary
		}
	}


	return(
	<TouchableNativeFeedback>
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
				<Icon 
					name={iconName(item.type)} 
					color={iconColor(item.type)}
					size={25}
				/>
			</View>
		</View>
	</TouchableNativeFeedback>
	)
}

Card.propTypes = {
}



export default Card;