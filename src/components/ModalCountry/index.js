import React,{useState} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import {
    Header,
    Button,
    Item,
    Input
} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import Modal from 'react-native-modal';
import {countries} from '../../utils/countries';
import PropTypes from 'prop-types';
import styles from './styles';

const ModalCountry = ({open,handleModal,onPress})=>{

    const [input,setInput] = useState('');
    const [country,setCountry] = useState(countries());

    const handleChange = (text)=>{
        setInput(text);
        let filters = countries().filter((item)=>{
            return item.name.match(text);
        });
        setCountry(filters)
    
    }

    const handleSelect = (country)=>{
        onPress(country);
        handleModal();
    }

    return(
            <Modal 
                style={styles.modal} 
                isVisible={open}
                onBackButtonPress ={()=>handleModal()}
            > 
                <Header searchBar noShadow style={{borderBottomWidth: 0,backgroundColor: 'white'}} iosBarStyle='dark-content' androidStatusBarColor='white'>
		            <Item>
                        <Input 
                            placeholder = "Buscar pais"
                            value = {input}
                            onChangeText = {(text)=>handleChange(text)}
                        />
                            <Button  
                                transparent
                                onPress = {()=>handleModal()}
                            >
           	                    <Icon name="close" color="black" size={27} />
        	                </Button>
                    </Item>
	            </Header>

                <FlatList 
                    style = {styles.ctn}
                    data = {country}
                    keyExtractor={(item) => item.name}
                    renderItem = {({item,index})=>(
                        
                        <TouchableOpacity
                            key = {index}
                            style = {styles.item}
                            onPress = {()=>handleSelect(item)}
                        >
                            <Text> {item.name} </Text>
                        </TouchableOpacity>
                        
                    )}
                />
                    

            </Modal>
        )
    
}



export default ModalCountry;