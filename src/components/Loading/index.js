import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {color} from '../../theme/';

const Loading = () => {
	const state = useSelector(state => state.loading);

	return(
 		<Spinner 
    		visible={state} 
    		size='large'
    		color={color.primary}
    		overlayColor='rgba(0, 0, 0, 0.7)'
  		/> 
  	)      
}

export default Loading;