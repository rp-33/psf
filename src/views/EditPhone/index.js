import React,{useState} from 'react';
import {
	View,
	Image
} from 'react-native';
import {
	Container,
	Form
} from 'native-base';
import {useDispatch} from 'react-redux';
import Head from '../../components/Head';
import Button from '../../components/Button';
import FieldPhone from './FieldPhone';
import styles from './styles';
import {apiEditPhone} from '../../apis/profile'; 
import {Formik} from 'formik';
import {phoneSchema} from '../../constants/validate';
import ModalCountry from '../../components/ModalCountry';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetPhone} from '../../actions/user';

const EditPhone = ({navigation})=>{

	const dispatch = useDispatch();
	const [countryCode,setCountryCode] = useState(58);
	const [modal,setModal] = useState(false);

	const handleSelectCountry = ({callingCodes})=>setCountryCode(callingCodes[0])
	
	const handleModal = ()=>setModal(!modal)

	const handleSubmit = async(values, actions)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let {phone} = values;
			let { status, data } = await apiEditPhone(countryCode,phone);
			if(status === 201)
			{
				dispatch(actionSetPhone({country_code:countryCode,phone:phone}))
				dispatch(actionSetToast({visible:true,title:data.message}))	
				navigation.pop(1);
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
				title = "Editar telefono"
				handleBack = {()=>navigation.goBack()}
			/>
			<View style={styles.ctn}>
				<Image 
					source ={require('../../assets/images/photo-capture.png')} 
					style = {styles.img}
				/>  
				<Formik
    				initialValues={{ 
    					phone: ''
    				}}
    				validationSchema = {phoneSchema}
    				onSubmit={handleSubmit}
  				>
    				{formikProps => (
    					<Form style={styles.form}>
   							<FieldPhone
   								formikProps = {formikProps}
								placeholder="Numero de telefono"
								type = "phone"
								countryCode = {countryCode}
								handleModal	= {handleModal}					
							/>
							<Button
								title = "Entrar"
								onPress={formikProps.handleSubmit} 
          					/>
          				</Form>
    				)}
  				</Formik>
			</View>
			{modal &&
				<ModalCountry 
					open = {modal}
					handleModal = {handleModal}
					onPress = {handleSelectCountry}
				/>
			}
		</Container>
	)

}

export default EditPhone;