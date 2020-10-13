import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Snackbar } from 'react-native-paper';
import {actionSetToast} from '../../actions/toast';

const Toast = ()=>{
	const {visible,title,type} = useSelector(state => state.toast);
	const dispatch = useDispatch();

	const handleDismiss = ()=>{
		dispatch(actionSetToast({title:'',visible:false}))
	}

	return(
		<Snackbar
        	visible={visible}
        	onDismiss={handleDismiss}  
        	duration = {3000}
        	style = {{backgroundColor : (type == 'error') ? 'red' : 'black' }}
        >   
        	{title}
      	</Snackbar>
	)
}



export default Toast;