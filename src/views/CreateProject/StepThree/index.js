import React,{useState} from 'react';
import {
	View,
	FlatList
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container} from 'native-base';
import Head from './Head';
import Button from '../../../components/Button';
import Photo from './Photo';
import Message from './Message';
import styles from './styles';
import { gallery } from '../../../utils/imagepicker';
import {actionSetToast} from '../../../actions/toast';
import {actionSetLoading} from '../../../actions/loading';
import { apiCreateProject } from '../../../apis/crowdfunding';

const StepThree = ({route,navigation})=>{

	const dispatch = useDispatch();
	const [photos,setPhotos] = useState([]);
	const [imagesSelect,setImagesSelect] = useState([])

	const handleImages = images=>gallery(setImage,true);

	const setImage = images=>{
		console.log(images)
		setPhotos([...photos,...images])
	}
	
	const handleAddDelete = (image)=>{
		selectImages(image)
	}

	const selectImages = (image)=>{
		let newSelect = imagesSelect.includes(image) ? imagesSelect.filter(item=>item!=image) : [...imagesSelect,image]; 
		setImagesSelect(newSelect);	
	}

	const handleSelect = image=>{
		if(imagesSelect.length!=0) selectImages(image);
	}

	const handleDelete = ()=>{
		let newPhotos = photos.filter(item => !imagesSelect.includes(item));
		setPhotos(newPhotos);
		setImagesSelect([]);
	}

	const handleCreate = async()=>{
		try
		{
			dispatch(actionSetLoading(true));
			const {name,description,time,amount,type} = route.params;
			let { status, data } = await apiCreateProject(type,name,description,time,amount,photos);

			if(status === 201)
			{
				navigation.pop(2);
				dispatch(actionSetToast({visible:true,title:data.message}))	
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
		finally
		{
			dispatch(actionSetLoading(false));
		}
	}

	return(
		<Container>
			<Head 
				title = "Paso final"
				handleBack = {()=>navigation.goBack()}
				handleImages = {handleImages}
				handleDelete = {handleDelete}
				images = {imagesSelect}
			/>
			{photos.length==0 
			?
			<Message />
			:
			<View style={styles.ctn}>
				<FlatList
                data = {photos}
                numColumns = {3}
                horizontal={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item,index})=>(
                    <Photo
                    	key ={index}
                    	image = {item}
                    	handleAddDelete = {handleAddDelete}
                    	handleSelect = {handleSelect}
                    	imagesSelect = {imagesSelect}
                    />
                )}
            	/>
            	<View style={styles.btn}>
            		<Button 
            			title = "Crear proyecto"
            			onPress = {handleCreate}
           			/>
           		</View>
           	</View>
           }
		</Container>
	)
}

export default StepThree;