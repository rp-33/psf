import React from 'react';
import {
	TouchableNativeFeedback,
	View,
	Text
} from 'react-native';
import Avatar from '../../../components/Avatar';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {gradient} from '../../../theme/';

const Contribute = ({item})=>{
	return(
		<TouchableNativeFeedback>
			 <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1.25, y: 1.25}} 
                colors={[gradient.init,gradient.end]} 
                style={styles.ctn}
            >
            	<Avatar 
            		avatar = {item.user.avatar}
            		sex = {item.user.sex}
            		size = {50}
            	/>
            	<View style={styles.ctnInf}>
            		<Text style={[styles.text,styles.name]}>{item.user.userName}</Text>
            	</View>
            </LinearGradient>
        </TouchableNativeFeedback>
	)	
}

export default Contribute;