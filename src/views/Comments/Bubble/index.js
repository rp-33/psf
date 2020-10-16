import React from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import {dateFormat} from '../../../utils/date';

const Bubble = ({item})=>{
	return(
		<View style={styles.ctn}>
			<Avatar
				avatar = {item.user.avatar}
				sex = {item.user.sex}
				size = {50}
			/>
			<View style={styles.bubble}>
				<View style={styles.ctnText}>
					<Text style={styles.name}>{item.user.userName}</Text>
					<Text> {item.text} </Text>
					<Text style={styles.date}>{dateFormat(item.create_at)}</Text>
				</View>
			</View>

		</View>
	)
}


export default Bubble;