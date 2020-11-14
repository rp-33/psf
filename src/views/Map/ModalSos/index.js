import React,{useState} from 'react';
import {
	View,
    Text
} from 'react-native';
import {H1} from 'native-base';
import Modal from 'react-native-modal';
import Button from '../../../components/Button';
import PropTypes from 'prop-types';
import styles from './styles';

const ModalCountry = ({open,handleModal,handleSos})=>{

    return(
            <Modal
                isVisible={open}
                onBackButtonPress ={()=>handleModal()}
            > 
            	<View style={styles.modal}>
     			<View style={styles.ctnText} >
     				<H1 style={styles.title}>Emergencia!</H1>
     				<Text>
     					¿Quiere notificar a los usuarios que estan cerca de usted sobre su situacion de peligro?
     				</Text>
     			</View>
     			<Button 
     				title = "Notificar"
     				onPress = {()=>handleSos()}
     			/>
     			</View>
            </Modal>
        )
    
}



export default ModalCountry;