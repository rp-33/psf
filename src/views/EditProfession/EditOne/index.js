import React,{useState} from 'react';
import {
	View,
	FlatList
} from 'react-native';
import {Container} from 'native-base';
import Head from '../../../components/Head';
import Profession from './Profession';
import {professions} from '../../../utils/professions';
import Button from '../../../components/Button';
import styles from './styles';

const EditOne = ({navigation})=>{

	const [profession,setProfession] = useState('');

	const handleSave = ()=>navigation.push('EditProfessionStepTwo',{profession:profession})
	
	return(
		<Container>
			<Head
				title = "Habilidades"
				handleBack = {()=>navigation.goBack()}
			/>
			<FlatList
				data = {professions()}
				numColumns = {2}
				keyExtractor={(item, index) => index.toString()}            	
               	renderItem = {({item,index})=>(
                   	<Profession
                   		key = {index}
                   		text = {item}
                   		profession = {profession}
                   		handleSelect = {(item)=>setProfession(item)}
                   	/>
               	)}
            />
           	{profession!='' &&
           	<View style={styles.btn}>
            	<Button 
            	title = "siguiente"
            	onPress = {handleSave}
            	/>
            </View>
        	}
		</Container>
	)
}

export default EditOne;