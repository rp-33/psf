import React,{useState} from 'react';
import {
	View,
	Text,
	Share
} from 'react-native';
import {
	Container,
	Content
} from 'native-base';
import {useDispatch} from 'react-redux';
import Head from '../../components/Head';
import Button from '../../components/Button';
import styles from './styles';
import SliderImages from '../../components/SliderImages';
import CardIcons from './CardIcons';
import {actionSetToast} from '../../actions/toast';

const InformationProject = ({navigation,route})=>{

	const dispatch = useDispatch();
	const {_id,name,description,amount,images,number_comments,total_donations,user} = route.params;
	
	const handleShare = async()=>{
		try 
		{
      		const result = await Share.share({message: `Colabora con ${user.userName},${description},en https://www.psf.com`})
    	} 
    	catch (err) 
    	{
      		dispatch(actionSetToast({visible:true,title:'Ha ocurrido un error al compartir'}))	
    	}
	}

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
					comments = {number_comments}
					amount = {amount}
					donations = {total_donations}
					handleNavigation = {()=>navigation.push('Comments',_id)}
					handleShare = {handleShare}
				/>
				<View>
					<Text>{description}</Text>
				</View>
				<Button 
					title="Contribuir"
					onPress= {()=>navigation.push('Contribute',_id)}
				/>
			</Content>
		</Container>
	)
}

export default InformationProject;