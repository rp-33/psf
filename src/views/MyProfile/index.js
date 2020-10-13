import React from 'react';
import {View} from 'react-native';
import {
	Container,
	Content
} from 'native-base';
import {useDispatch,useSelector} from 'react-redux';
import Head from '../../components/Head';
import ButtonCard from '../../components/ButtonCard';
import ButtonCardAvatar from '../../components/ButtonCardAvatar';
import styles from './styles';
import { apiLogout } from '../../apis/auth';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetLogout} from '../../actions/user';

const MyProfile = ({navigation})=>{

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const handleLogout = async()=>{
		try
		{
			dispatch(actionSetLoading(true));
			let { status, data } = await apiLogout();
			if(status === 204)
			{
				dispatch(actionSetLogout());
				navigation.navigate('Home')
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

	const handleNavigation = root=>navigation.push(root)


	return(
		<Container>
			<Head/>
			<Content style={styles.ctn}>
				<View style={styles.ctnButton}>
					<ButtonCardAvatar
						avatar = {user.avatar}
						sex = {user.sex}
						text = "Foto de perfil"
						onPress = {()=>handleNavigation('EditAvatar')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "telefono-movil"
						text = "Numero de telefono"
						onPress = {()=>console.log('onPress')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "certificado"
						text = "Perfil profesional"
						onPress = {()=>handleNavigation('EditProfession')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "ubicacion"
						text = {user.country ? user.country : "Pais de residencia"}
						onPress = {()=>handleNavigation('CountryResidence')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "contrasena"
						text = "Cambiar contraseña"
						onPress = {()=>handleNavigation('EditPassword')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "contrato"
						text = "Terminos y condiciones"
						onPress = {()=>console.log('onPress')}
					/>
				</View>
				<View style={styles.ctnButton}>
					<ButtonCard 
						image = "logout"
						text = "Cerrar sessión"
						onPress = {handleLogout}
					/>
				</View>
			</Content>
		</Container>
	)
}

export default MyProfile;