import React from 'react';
import {View} from 'react-native';
import {
	Container,
	Content
} from 'native-base';
import Head from '../../components/Head';
import ButtonCard from '../../components/ButtonCard';
import styles from './styles';

const WorkConfiguration = ({navigation})=>{


	return(
		<Container>
			<Head
				title = "Perfil de trabajo"
				handleBack = {()=>navigation.goBack()}
			/>
			<Content style={styles.ctn}>
				<View style={styles.card}>
					<ButtonCard 
						image = "certificado"
						text = "Editar perfil profesional"
						onPress = {()=>navigation.push('EditProfession')}
					/>
				</View>
			</Content>
		</Container>
	)
}

export default WorkConfiguration;