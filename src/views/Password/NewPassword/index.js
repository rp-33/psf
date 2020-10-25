import React from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import {
	Container,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Head from '../../../components/Head';
import Button from '../../../components/Button';
import FieldInput from '../../../components/FieldInput';
import {passwordSchema} from '../../../constants/validate';
import {apiNewPassword} from '../../../apis/password';
import {actionSetToast} from '../../../actions/toast';
import {actionSetLoading} from '../../../actions/loading';


const NewPassword = ({navigation,route})=>{

	const dispatch = useDispatch();
	const {token} = route.params;

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {password} = values;
			let { status, data } = await apiNewPassword(password,token);
			if(status === 201)
			{
				dispatch(actionSetToast({visible:true,title:data.message}))	
   				navigation.navigate('Home');
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
				title = "Cambiar contraseña"
				handleBack = {()=>navigation.goBack()}
			/>
			<View>
				<Formik
    				initialValues={{
    					password : '',
    					repeatPassword : ''
    				}}
    				validationSchema = {passwordSchema}
    				onSubmit={handleSubmit}
  				>
    			{formikProps => (
    				<Form>
						<FieldInput
   							formikProps = {formikProps}
							placeholder="Contraseña nueva"
							type = "password"									
							secureTextEntry						
						/>
						<FieldInput
   							formikProps = {formikProps}
							placeholder="Repetir contraseña"
							type = "repeatPassword"									
							secureTextEntry						
						/>
						<Button
							title = "Enviar"
							onPress={formikProps.handleSubmit} 
          				/>
          			</Form>
    			)}
  				</Formik>
  			</View>

		</Container>
	)
}

export default NewPassword;