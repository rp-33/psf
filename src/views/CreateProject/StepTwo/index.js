import React from 'react';
import {
	Container,
	Content,
	Form
} from 'native-base';
import {Formik} from 'formik';
import Head from '../../../components/Head';
import Button from '../../../components/Button';
import FieldInput from '../../../components/FieldInput';
import { crowdfundingSchema } from '../../../constants/validate';
import styles from './styles';

const StepTwo = ({route,navigation})=>{

	const handleNext = (values, actions)=>{
		const {name,description,time,amount} = values;
		const {type} = route.params;
		navigation.push('CreateProjectStepThree',{name,description,time,amount,type});
	}

	return(
		<Container>
			<Head 
				title = "Paso dos"
				handleBack = {()=>navigation.goBack()}
			/>

			<Content style={styles.ctn}>
				<Formik
    				initialValues={{ 
    					name: '',
    					description : '',
    					time : '',
    					amount : ''
    				}}
    				validationSchema = {crowdfundingSchema}
    				onSubmit={handleNext}
  				>
					{formikProps => (
    					<Form style={styles.form}>
   							<FieldInput
   								formikProps = {formikProps}
								placeholder="Nombre del proyecto"
								type = "name"						
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Descripcion del proyecto"
								type = "description"
								multiline = {true}						
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Duracion del proyecto en dias"
								type = "time"	
								keyboardType = {"phone-pad"}					
							/>
							<FieldInput
   								formikProps = {formikProps}
								placeholder="Objetivo alcanzar en $usd"
								type = "amount"	
								keyboardType = {"phone-pad"}					
							/>
							<Button
								title = "Siguiente"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  				</Formik>
  			</Content>

		</Container>
	)
}

export default StepTwo;