import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

const Groupsex= ({formikProps,handleSelect})=>{
		const { values} = formikProps;
	return(
		<View style={styles.ctnSex}>
			<View style={styles.sex}>
				<Text>Masculino</Text>
				<RadioButton
          			value="male"
          			color="blue"
          			status={values['sex']=== 'male' ? 'checked' : 'unchecked'}
        			onPress={()=>handleSelect('male')}
        		/>
        	</View>
        	<View style={styles.sex}>
        		<Text>Femenino</Text>
        		<RadioButton
          			value="female"
          			color="pink"
          			status={values['sex']=== 'female' ? 'checked' : 'unchecked'}
        			onPress = {()=>handleSelect('female')}
        		/>
        	</View>
		</View>
	)
}

export default Groupsex;