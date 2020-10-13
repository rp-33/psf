import React from 'react';
import {
	View
} from 'react-native'
import {
	Input,
	Item,
	Text
} from 'native-base';
import styles from './styles';

const FieldInput = ({placeholder,type,formikProps,secureTextEntry, keyboardType,multiline})=>{
	const { handleChange, handleBlur, values, errors, touched } = formikProps;

	return(
		<View style={styles.ctnInput}>
			<Item rounded error={errors[type] && touched[type]}>
            	<Input 
            		placeholder={placeholder} 
            		onChangeText={handleChange(type)}
          			onBlur={handleBlur(type)}
          			secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
          			value={values[type]}
                    multiline = {multiline==undefined ? false : true}
            	/>
        	</Item>
        	{
        		(errors[type] && touched[type]) &&
            	<Text style={styles.error}>{errors[type]}</Text>
        	}
        </View>
    
	)
}


export default FieldInput;