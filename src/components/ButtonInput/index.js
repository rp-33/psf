import React from 'react';
import {
    View,
	TouchableOpacity
} from 'react-native'
import {
	Input,
	Item,
	Text
} from 'native-base';
import styles from './styles';

const ButtonInput = ({placeholder,type,formikProps,handleModal})=>{
	const { errors, touched } = formikProps;

	return(
		<View style={styles.ctnInput}>
			<Item rounded style = {styles.input} error={errors[type] && touched[type]}>
                <TouchableOpacity style = {styles.ctnText} onPress={()=>handleModal()}>
            	   <Text>{placeholder}</Text>
                </TouchableOpacity>
        	</Item>
        	{
        		(errors[type] && touched[type]) &&
            	<Text style={styles.error}>{errors[type]}</Text>
        	}
        </View>
    
	)
}


export default ButtonInput;