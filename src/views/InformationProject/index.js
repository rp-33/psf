import React from 'react';
import {
	View,
	Text
} from 'react-native';
import {
	Container,
	Content
} from 'native-base';
import Head from '../../components/Head';
import Button from '../../components/Button';
import styles from './styles';
import SliderImages from '../../components/SliderImages';
import CardIcons from './CardIcons';

const InformationProject = ({navigation,route})=>{

	const {_id,name,description,amount,images,comments,likes,total_donations} = route.params;

	return(
		<Container>
			<Head 
				handleBack = {()=>navigation.goBack()}
				title = {name}
			/>
			<Content style={styles.ctn}>
				<SliderImages 
					images = {images}
					layout = 'stack'
				/>
				<CardIcons 
					comments = {comments}
					likes = {likes}
					amount = {amount}
					donations = {total_donations}
				/>
				<View>
					<Text>{description}</Text>
				</View>
				<Button 
					title="Contribuir"
					onPress= {()=>console.log('Contribuir')}
				/>
			</Content>
		</Container>
	)
}

export default InformationProject;