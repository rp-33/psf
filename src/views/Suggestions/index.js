import React from 'react';
import {
	Container,
	Content,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Head from '../../components/Head';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import { suggestionsSchema } from '../../constants/validate';
import {apiSuggestions} from '../../apis/profile';
import styles from './styles';

const Suggestions = ({navigation})=>{

	const dispatch = useDispatch();

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {text} = values;
			let { status, data } = await apiSuggestions(text);
			if(status === 201)
			{
				dispatch(actionSetToast({visible:true,title:data.message}));
				navigation.pop(1)
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
				title = "Sugerencias"
				handleBack = {()=>navigation.goBack()}
			/>
			<Content>
				<Formik
    				initialValues={{ 
    					text: ''
    				}}
    				validationSchema = {suggestionsSchema}
    				onSubmit={handleSubmit}
  				>
    			{formikProps => (
    				<Form style={styles.form}>
   						<FieldInput
   							formikProps = {formikProps}
							placeholder="Que podemos ayudarte?"
							type = "text"				
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

export default Suggestions;