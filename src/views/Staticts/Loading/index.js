import React,{Fragment} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import ContentLoader, { Rect } from 'react-content-loader/native';
import styles from './styles';

const Loading = ({loading})=>{
	if(!loading) return null;
	return(
		<ContentLoader style={styles.card}>
			<Rect
				x="0" 
				y="0" 
				rx = "20"
				ry = "20"
				width={110} 
				height={150} 
			/>
		</ContentLoader>

	)
}

Loading.propTypes = {
	loading : PropTypes.bool.isRequired
}

export default Loading;