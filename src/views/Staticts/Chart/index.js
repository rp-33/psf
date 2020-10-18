import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import styles from './styles';
import {color} from '../../../theme/';

const Chart = ({percentaje})=>{

	return(
		<View style={styles.ctn}>
			<View style={styles.ctnText}>
				<Text style={styles.text}>{percentaje}%</Text>
			</View>
			<ProgressCircle 
				style={styles.progress} 
				progress={percentaje/100} 
				progressColor={color.primary} 
			/>
		</View>
	)
}

Chart.propTypes = {
	percentaje : PropTypes.number.isRequired
}

export default Chart;