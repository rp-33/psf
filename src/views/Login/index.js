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
import Head from '../../components/Head';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import { signInSchema } from '../../constants/validate';
import styles from './styles';
import { apiLogin } from '../../apis/auth';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetAuth} from '../../actions/user';

const Login = ({navigation})=>{

	const dispatch = useDispatch();

	const handleLogin = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {userName,email,sex,password} = values;
			let { status, data } = await apiLogin(email,password);
			if(status === 200)
			{
				dispatch(actionSetAuth(data));
				navigation.navigate('Dashboard');
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
				title = "Iniciar session"
				handleBack = {()=>navigation.goBack()}
			/>
				<View style={styles.ctnForm}>
					<Formik
    					initialValues={{ 
    						email: '',
    						password : ''
    					}}
    					validationSchema = {signInSchema}
    					onSubmit={handleLogin}
  					>
    				{formikProps => (
    					<Form style={styles.form}>
   							<FieldInput
   								formikProps = {formikProps}
								placeholder="Correo electronico"
								type = "email"						
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Contraseña"
								type = "password"									
								secureTextEntry						
							/>
							<Button
								title = "Entrar"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  					</Formik>
  					<View style={styles.ctnRecover}>
  						<TouchableOpacity>
            				<Text style={styles.textRecover}>Recuperar contraseña</Text>
         	 			</TouchableOpacity>
         	 		</View>
  				</View>

			</Container>
	)
}

export default Login;