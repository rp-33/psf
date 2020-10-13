import React from 'react';
import {
	Container,
	Content,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Head from '../../../components/Head';
import Button from '../../../components/Button';
import FieldInput from '../../../components/FieldInput';
import { professionSchema } from '../../../constants/validate';
import styles from './styles';
import {actionSetToast} from '../../../actions/toast';
import {actionSetLoading} from '../../../actions/loading';
import { apiEditProfession } from '../../../apis/profile';

const EditTwo = ({route,navigation})=>{

	const dispatch = useDispatch();

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			const {experience,description,ci} = values;
			const {profession} = route.params;	

			let { status, data } = await apiEditProfession(ci,profession,experience,description);

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
				title = "Perfil profesional"
				handleBack = {()=>navigation.goBack()}
			/>

			<Content style={styles.ctn}>
				<Formik
    				initialValues={{ 
    					ci : '',
    					experience : '',
    					description : ''
    				}}
    				validationSchema = {professionSchema}
    				onSubmit={handleSubmit}
  				>
					{formikProps => (
    					<Form style={styles.form}>
    						<FieldInput
   								formikProps = {formikProps}
								placeholder="Cedula de identidad"
								type = "ci"	
								keyboardType = {"phone-pad"}					
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="año de experiencia"
								type = "experience"	
								keyboardType = {"phone-pad"}					
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Danos una descripcion de tu experiencia"
								type = "description"
								multiline = {true}						
							/>							
							<Button
								title = "Enviar"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  				</Formik>
  			</Content>

		</Container>
	)
}

export default EditTwo;