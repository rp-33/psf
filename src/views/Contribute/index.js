import React from 'react';
import {
	View,
	Image
} from 'react-native';
import {
	Container,
	Form
} from 'native-base';
import Head from '../../components/Head';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {Formik} from 'formik';
import FieldInput from '../../components/FieldInput';
import Button from '../../components/Button';
import {contributeSchema} from '../../constants/validate';
import stripe from 'tipsi-stripe';
import configuration from '../../configuration';
import {apiContribute} from '../../apis/crowdfunding';

stripe.setOptions({
    publishableKey: configuration.stripe
});

const Contribute = ({navigation,route})=>{

	const id = route.params;
	const dispatch = useDispatch();

	const handleSubmit = async(values, actions)=>{
		try
		{
			let { tokenId } = await stripe.paymentRequestWithCardForm();
            if(tokenId)
            {
            	let {amount} = values;
                handlePayment(tokenId,amount,id)
            } 
            else
            {
            	dispatch(actionSetToast({visible:true,title:'Numero de tarjeta no existe'}));
            }
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Ha ocurrido un error'}));
		}
	}

	const handlePayment = async(tokenId,amount,id)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let { status, data } = await apiContribute(id,tokenId,amount);
			
			if(status === 201)
			{
				navigation.navigate('ThankMessage');
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
				title = "Ayudar"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style={styles.ctn}>
				<Image 
					source ={require('../../assets/images/ayuda-unidos.png')} 
					style = {styles.img}
				/>  
				<Formik
    				initialValues={{ 
    					amount: ''
    				}}
    				validationSchema = {contributeSchema}
    				onSubmit={handleSubmit}
  				>
    				{formikProps => (
    					<Form style={styles.form}>
   							<FieldInput
   								formikProps = {formikProps}
								placeholder="Monto a transferir"
								type = "amount"	
								keyboardType = "phone-pad"			
							/>
							<Button
								title = "Depositar"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  				</Formik>
			</View>
		</Container>
	)	
}

export default Contribute;