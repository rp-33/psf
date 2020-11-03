import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import Emoji from '../Emoji';
import Proptypes from 'prop-types';
import {emojis} from '../../../utils/emojis';
import styles from './styles';

const ModalBottom = ({open, handleModal,handleSelect})=>{

	const onSelect = (emotion)=>{
		handleSelect(emotion);
		handleModal();
	}

  	return(
    	<Modal isVisible={open} style={styles.bottomModal} onBackdropPress={()=>handleModal()} onBackButtonPress ={()=>handleModal()}>
      		<View style={styles.modalContent}> 
      			<FlatList 
					data = {emojis()}
					keyExtractor={(item, index) => index.toString()}
					horizontal={true}
        			showsHorizontalScrollIndicator = {false}
					renderItem = {({item,index})=>(
						<TouchableOpacity 
        					key ={item}
        					onPress={()=>onSelect(item)}
        				>
          					<View style={styles.item}>
          						<Emoji 
          							emotion = {item}
          							width = {25}
          							height = {25}
          						/>
           					</View>
       	 				</TouchableOpacity> 
                	)}

				/>
      		</View>
    	</Modal>
  	)
          
}


ModalBottom.proptypes = {
 	modal : Proptypes.bool.isRequired,
 	handleModal: Proptypes.func.isRequired
}


export default ModalBottom;