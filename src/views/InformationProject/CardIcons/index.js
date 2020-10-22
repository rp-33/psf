import React from 'react';
import {
	TouchableOpacity,
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import PropTypes from 'prop-types';

const CardIcons  = ({amount,comments,donations,handleShare})=>{
	return(
		<View style={styles.ctn}>
			<TouchableOpacity 
				style={styles.ctnIcon}
			>
				<Icon 
               		name="chart" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
				<Text>{donations/amount*100}%</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={styles.ctnIcon}
				handleNavigation = {()=>handleNavigation()}
			>
				<Icon 
               		name="comment" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
				<Text>{comments}</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={styles.ctnIcon}
				onPress = {()=>handleShare()}
			>
				<View style={styles.share}>
				<Icon 
               		name="share-google" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
            	</View>
			</TouchableOpacity>
		</View>
	)
}

export default CardIcons;