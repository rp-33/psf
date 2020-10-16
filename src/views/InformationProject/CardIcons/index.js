import React from 'react';
import {
	TouchableOpacity,
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const CardIcons  = ({amount,comments,likes,donations})=>{
	return(
		<View style={styles.ctn}>
			<TouchableOpacity style={[styles.childBottom,styles.ctnProgress]}>
				<Icon 
               		name="chart" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
				<Text>{donations/amount*100}%</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.childBottom,styles.like]}>
				<Icon 
               		name="comment" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
				<Text>{comments.length}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.childBottom,styles.comment]}>
				<Icon 
               		name="heart" 
               		size={27} 
               		color="black"
               		style={styles.icon}
            	/>
				<Text>{likes.length}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CardIcons;