import React,{useState,useEffect} from 'react';
import {
	View,
	Text,
	Share
} from 'react-native';
import {
	Container,
	Content
} from 'native-base';
import {useSelector,useDispatch} from 'react-redux';
import Head from '../../components/Head';
import Button from '../../components/Button';
import Loading from '../../components/LoadingMore';
import styles from './styles';
import SliderImages from '../../components/SliderImages';
import CardIcons from './CardIcons';
import {actionSetToast} from '../../actions/toast';
import {apiFindProject} from '../../apis/crowdfunding';

const InformationProject = ({navigation,route})=>{

	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const {_id} = route.params;
	const [project,setProject] = useState({
		name : null,
		description : null,
		amount : null,
		images : null,
		number_comments : null,
		total_donations : null,
		user : null,
		data:false
	})

	useEffect(()=>{
		findProject(_id);
	},[]);

	const findProject =async()=>{
		try
		{
			let {status,data} = await apiFindProject(_id);
			if(status===200)
			{
				let {name,description,amount,images,number_comments,total_donations,user} = data;
				setProject({
					name,
					description,
					amount,
					images,
					number_comments,
					total_donations,
					user,
					data:true
				})
			}
			else
			{
				dispatch(actionSetToast({visible:true,title:data.error}))	
			}
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))	
		}
	}
	
	const handleShare = async()=>{
		try 
		{
      		const result = await Share.share({message: `Colabora con ${project.user.userName},${project.description},en https://www.psf.com`})
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
				title = {project.name}
			/>
			{!project.data
			?
			<Loading 
				loading = {!project.data}
			/>
			:
			<Content style={styles.ctn}>
				<SliderImages 
					images = {project.images}
					layout = 'stack'
				/>
				<CardIcons 
					comments = {project.number_comments}
					amount = {project.amount}
					donations = {project.total_donations}
					handleNavigation = {()=>navigation.push('Comments',{_id:_id,user_id:project.user._id})}
					handleShare = {handleShare}
				/>
				<View>
					<Text>{project.description}</Text>
				</View>
				{(user._id != project.user._id) &&
					<Button 
						title="Contribuir"
						onPress= {()=>navigation.push('Contribute',{_id:_id,user_id:project.user._id})}
					/>
				}
			</Content>
			}
		</Container>
	)
}

export default InformationProject;