import React from 'react';
import {View} from 'react-native';
import {
	Container,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Head from '../../../components/Head';
import Button from '../../../components/Button';
import FieldInput from '../../../components/FieldInput';
import { emailSchema } from '../../../constants/validate';
import {actionSetToast} from '../../../actions/toast';
import {actionSetLoading} from '../../../actions/loading';
import { apiSendcode } from '../../../apis/password';
import styles from './styles';

const RecoverPassword = ({navigation})=>{

	const dispatch = useDispatch();

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {email} = values;
			let { status, data } = await apiSendcode(email);
			if(status === 201)
			{
				navigation.push('SendPassword',{token:data.token,email:email});
			}
			else
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}))	     
			}
		}
		catch(err)
		{
			console.log(err)
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
				title = "Recuperar contraseña"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style={styles.ctnForm}>
				<Formik
    				initialValues={{ 
    					email: ''
    				}}
    				validationSchema = {emailSchema}
    				onSubmit={handleSubmit}
  				>
    			{formikProps => (
    				<Form style={styles.form}>
   						<FieldInput
   							formikProps = {formikProps}
							placeholder="Correo electronico"
							type = "email"						
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

export default RecoverPassword;