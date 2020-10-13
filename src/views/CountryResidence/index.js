import React,{useState} from 'react';
import {
	FlatList,
	View
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container} from 'native-base';
import styles from './styles';
import Head from './Head';
import Country from './Country';
import {countries} from '../../utils/countries';
import Button from '../../components/Button';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {actionSetCountry} from '../../actions/user';
import { apiEditCountry } from '../../apis/profile';

const CountryResidence = ({navigation})=>{

	const dispatch = useDispatch();
	const [value,setValue] = useState('');
	const [country,setCountry] = useState(countries());
	const [countrySelect,setCountrySelect] = useState('');

	const handleSearch = (text)=>{
		setValue(text);
        let filters = countries().filter((item)=>{
            return item.name.match(text);
        });
        setCountry(filters)
	}

	const handleSelect = ({name})=>setCountrySelect(name)

	const handleSave = async()=>{
		try
		{
			dispatch(actionSetLoading(true));
			let { status, data } = await apiEditCountry(countrySelect);

			if(status === 201)
			{
				dispatch(actionSetCountry(countrySelect))
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
				handleBack = {()=>navigation.goBack()}
				value = {value}
				handleSearch = {handleSearch}
			/>
			<FlatList 
				style = {styles.ctn}
				initialNumToRender={20}
                data = {country}
                keyExtractor={(item) => item.name}
                renderItem = {({item,index})=>(
               		<Country 
               			key = {index}
               			country = {item}
               			handleSelect = {handleSelect}
               			countrySelect = {countrySelect}
               		/>
                )}
            />
            {countrySelect != '' &&
            	<View style = {styles.ctn}>
            		<Button
						title = "Guardar"
						onPress={handleSave} 
          			/>
          		</View>
          	}
		</Container>
	)
}

export default CountryResidence;
