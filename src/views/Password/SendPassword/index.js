import React from 'react';
import {
	View,
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
import { codeSchema } from '../../../constants/validate';
import {actionSetToast} from '../../../actions/toast';
import {actionSetLoading} from '../../../actions/loading';
import { apiCodePassword} from '../../../apis/password';
import styles from './styles';

const SendPassword = ({navigation,route})=>{

	const dispatch = useDispatch();
	const {token,email} = route.params;

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {code} = values;
			let { status, data } = await apiCodePassword(code,email);
			if(status === 200)
			{
				navigation.push('NewPassword',{token,email});
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
				title = "Recuperar contraseña"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style={styles.ctnForm}>
				<View style={styles.ctnText}>
					<Text style={styles.text}>Se ha enviado un codigo a su correo.</Text>
				</View>
				<Formik
    				initialValues={{ 
    					code: ''
    				}}
    				validationSchema = {codeSchema}
    				onSubmit={handleSubmit}
  				>
    			{formikProps => (
    				<Form style={styles.form}>
   						<FieldInput
   							formikProps = {formikProps}
							placeholder="Codigo de verificacion"
							type = "code"						
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

export default SendPassword;