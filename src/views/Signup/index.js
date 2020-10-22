import React from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import {
	Container,
	Content,
	H1,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Head from '../../components/Head';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import Groupsex from '../../components/Groupsex';
import { signupSchema } from '../../constants/validate';
import styles from './styles';
import { apiSignup } from '../../apis/auth';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetAuth} from '../../actions/user';

const Signup = ({navigation})=>{

	const dispatch = useDispatch();

	const handleSignup = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {userName,email,sex,password,age} = values;
			let { status, data } = await apiSignup(userName,email,age,sex,password);
			
			if(status === 201)
			{
				dispatch(actionSetAuth(data));
			}
			else
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}));	     
			}
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}));	
		}
		finally
		{
			dispatch(actionSetLoading(false));
		}

	}

	return(
		<Container>
			<Head
				title = "Registrate"
				handleBack = {()=>navigation.goBack()}
			/>
				<Content style={styles.ctn}>
					<Formik
    					initialValues={{ 
    						userName : '',
    						email: '',
    						password : '',
    						repeatPassword : '',
    						sex : 'male',
    						age : ''
    					}}
    					validationSchema = {signupSchema}
    					onSubmit={handleSignup}
  					>
    				{formikProps => (
    					<Form style={styles.form}>
    						<FieldInput
   								formikProps = {formikProps}
								placeholder="Nombre y apellido"
								type = "userName"						
							/>
   							<FieldInput
   								formikProps = {formikProps}
								placeholder="Correo electronico"
								type = "email"						
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Edad"
								type = "age"	
								keyboardType = {"phone-pad"}					
							/>
							<Groupsex 
								formikProps = {formikProps}
								handleSelect = {(sex)=>formikProps.setFieldValue('sex', sex)}
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Contraseña"
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
								title = "Registrarme"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  					</Formik>
  				</Content>

			</Container>
	)
}


export default Signup