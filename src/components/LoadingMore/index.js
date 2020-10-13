import React,{Fragment} from 'react';
import {
	StyleSheet,
	View,
	ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import {color} from '../../theme/';
import styles from './styles';

const LoadingMore = ({loading})=>{
	if(!loading) return null;
	return(
		<View style ={styles.ctn} >
			<ActivityIndicator
               color = {color.primary}
               size = {30}
               style={styles.loading}
            />
		</View>
	)
}

LoadingMore.propTypes = {
	loading : PropTypes.bool.isRequired
}


export default LoadingMore;