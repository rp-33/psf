import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import { gallery, camera } from '../../utils/imagepicker';
import Proptypes from 'prop-types';
import styles from './styles';

const ModalBottom = ({modal, handleModal, setImage,multiple })=>{

	const handleCamera = () => {
    	handleModal();
    	camera(setImage);
  	};

  	const handleGalery = () => {
    	handleModal();
    	gallery(setImage);
  	};

  return(
    <Modal isVisible={modal} style={styles.bottomModal} onBackdropPress={()=>handleModal()} onBackButtonPress ={()=>handleModal()}>
      <View style={styles.modalContent}> 
        <TouchableOpacity onPress = {()=>handleCamera()}>
          <View style={styles.item}>
           <Image source={require('../../assets/images/camera.png')} style={styles.img}/>
          </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress = {()=>handleGalery()}>
          <View style={styles.item}>
            <Image source={require('../../assets/images/galery.png')} style={styles.img}/>
          </View>
        </TouchableOpacity>  
      </View>
    </Modal>
  )
          
}


ModalBottom.proptypes = {
 	modal : Proptypes.bool.isRequired,
 	handleModal: Proptypes.func.isRequired,
 	setImage : Proptypes.func.isRequired,
  multiple : Proptypes.bool.isRequired
}


export default ModalBottom;