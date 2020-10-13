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

const Card = ({item})=>{

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
				<Image 
					source ={{uri:'https://d500.epimg.net/cincodias/imagenes/2019/06/13/lifestyle/1560459860_259425_1560461372_noticia_normal.jpg'}}
					style={styles.avatar}
				/>
				<View>
					<Text style={styles.title}>{item.displayName}</Text>
					<Text style={styles.message}>{item.message}</Text>
				</View>
			</View>
			<View style={{marginRight:20}}>
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