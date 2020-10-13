import React from 'react';
import {
	TouchableNativeFeedback,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Country = ({country,handleSelect,countrySelect})=>{

	return(
		<TouchableNativeFeedback  
			style={styles.ctn}        	
            onPress = {()=>handleSelect(country)}
        >
        	<View style={styles.item}>
            	<Text>{country.name}</Text>
            	{country.name === countrySelect &&
					<View style={styles.ctnIconDelete}>
						<Icon name="check" 
					 	color="white"
					 	size = {10}
						/>
					</View>
				}
			</View>
        </TouchableNativeFeedback>
	)	
}

export default Country;