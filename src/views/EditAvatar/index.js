import React,{useState} from 'react';
import {
	View,
	TouchableOpacity
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {Container} from 'native-base';
import Head from '../../components/Head';
import styles from './styles';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../theme/';
import ModalBottom from '../../components/ModalBottom';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetAvatar} from '../../actions/user';
import {apiEditAvatar} from '../../apis/profile';

const EditAvatar = ({navigation})=>{

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	const [avatar,setAvatar] = useState('');
	const [modal,setModal] = useState(false);

	const handleModal = ()=>setModal(!modal);

	const handleImage = image=>setAvatar(image)

	const handleSave = async()=>{
		try
		{
			dispatch(actionSetLoading(true));
			let { status, data } = await apiEditAvatar(avatar);

			if(status === 201)
			{
				dispatch(actionSetAvatar(data.avatar))
				dispatch(actionSetToast({visible:true,title:data.message}))	
				navigation.pop(1);
			}
			else
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}))	     
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
				title = "Foto perfil"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style={styles.ctn}>
				<View style={styles.ctnImage}>
					<TouchableOpacity
						onPress = {handleModal}
						style = {styles.sectionImg}
					>
						<Avatar
							avatar = {avatar}
							sex = {user.sex}
							size = {70}
						/>
						<View style={styles.ctnIcon}>
							<Icon 
								size = {15}
								name="camera" 
								color = {color.primary}					
							/>
						</View>
					</TouchableOpacity>
				</View>
				{avatar!='' &&
					<Button 
						title = "Guardar"
						onPress = {handleSave}
					/>
				}
			</View>

			{modal &&
				<ModalBottom 
					modal = {modal}
					handleModal = {handleModal}
					setImage = {handleImage}
					multiple  = {false}
				/>

			}

		</Container>
	)
}

export default EditAvatar;