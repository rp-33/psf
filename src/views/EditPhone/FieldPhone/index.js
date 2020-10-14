import React,{useState} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput
} from 'react-native';
import styles from './styles';


const FieldPhone = ({placeholder,type,formikProps,countryCode,handleModal})=>{

    const { handleChange, handleBlur, values, errors, touched } = formikProps;

	return(
        <View>
            <View style={styles.item}>
            	<TouchableOpacity 
            		style={styles.countryCode}
            		onPress = {handleModal}
            	>
            	<Text>+{countryCode}</Text>
            	</TouchableOpacity>
            	<View style={styles.inputNumber}>
            		<TextInput 
            	   		placeholderTextColor = "black"
            	   		placeholder = {placeholder}
            	   		onChangeText={handleChange(type)}
          				onBlur={handleBlur(type)}
          				value={values[type]}
            	   		keyboardType = "numeric"
            	   		style = {styles.input}
            		/>
            	</View>	
            </View>		
			{
        		(errors[type] && touched[type]) &&
            	<Text style={styles.error}>{errors[type]}</Text>
        	}

        </View>
	)
}


export default FieldPhone;