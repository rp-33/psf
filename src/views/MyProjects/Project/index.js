import React from 'react';
import {
	View,
	Image,
	Text,
	TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../../theme';
import PropTypes from 'prop-types';
import styles from './styles';

const Project = ({handleNavigation,item})=>{
	return(
	<TouchableNativeFeedback 
		onPress = {()=>handleNavigation()}
	>
		<View style={styles.ctn}>
			<View style={styles.ctnImage}>
				{(item.total_donations> item.amount || item.total_donations === item.amount) &&
				<Icon 
					name="trophy" 
					color={color.secondary} 
					size={20} 
					style={styles.icon}
				/>
				}
				<Image 
					source ={{uri:item.images[0]}}
					style={styles.image}
				/>
				<View>
					<Text style={styles.title}>{item.name}</Text>
					<Text style={styles.description}>Proyecto {item.type}</Text>
				</View>
			</View>
			<View style={{marginRight:20}}>
				<Text style={styles.money}>${item.total_donations}</Text>
			</View>
		</View>
	</TouchableNativeFeedback>
	)
}

Project.propTypes = {
	handleNavigation : PropTypes.func.isRequired,
	item : PropTypes.shape({
		_id : PropTypes.string.isRequired,
		name : PropTypes.string.isRequired,
		type : PropTypes.string.isRequired,
		total_donations : PropTypes.number.isRequired,
		amount : PropTypes.number.isRequired,
		images : PropTypes.array.isRequired
	})
}


export default Project;