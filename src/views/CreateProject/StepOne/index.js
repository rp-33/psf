import React,{useState} from 'react';
import{
	View,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';
import {Container} from 'native-base';
import Head from '../../../components/Head';
import {color} from '../../../theme'
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';

const StepOne = ({navigation})=>{

	const [type,setType] = useState('');

	const handleSelect = type=> setType(type);

	const handleNext = ()=>{
		navigation.push('CreateProjectStepTwo',{type:type});
	}

	return(
		<Container>
			<Head 
				title = "Paso uno"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style = {styles.ctn}>
				<View style={styles.ctnTitle}>
					<Text style={styles.title}>Tipo de proyecto.</Text>
				</View>
				<TouchableOpacity
					style={styles.card}
					onPress = {()=>handleSelect('social')}
				>
					{type == 'social' &&
						<Icon 
							name="check-circle" 
							color={color.secondary} 
							size={25} 
							style={styles.icon}
						/>
					}
					<Image 
                	    source = {require('../../../assets/images/social.png')}
                	    style = {styles.image}
               		/>
               		<View style={styles.ctnText}>
               			<Text style={styles.text}>Social</Text>
               		</View>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.card}
					onPress = {()=>handleSelect('emprendimiento')}
				>
					{type == 'emprendimiento' &&
						<Icon 
							name="check-circle" 
							color={color.secondary} 
							size={25} 
							style={styles.icon}
						/>
					}
					<Image 
                   		source = {require('../../../assets/images/emprendimiento.png')}
                    	style = {styles.image}
               		/>
               		<View style={styles.ctnText}>
               			<Text style={styles.text}>Emprendimiento</Text>
               		</View>
				</TouchableOpacity>

				{type !='' &&
					<View style={styles.ctnButton}>
						<Button
							title = "siguiente"
							onPress={()=>handleNext()} 
          				/>
					</View>
				}
			</View>
		</Container>
	)
}

export default StepOne;