import React from 'react';
import {
    Fab,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import PropTypes from 'prop-types';

const ButtonFloat = ({open,onStateChange,handleModal,handleNavigation})=>{
    return(
        <Fab
            active={open}
            direction="up"
            position="bottomRight"
            style={styles.fab}            
            onPress={() => onStateChange()}
        >
            {open 
            ?
                <Icon name="close"/>
            :
                <Icon name="comment"/>
            }
            <Button 
                onPress = {()=>handleModal()}
                style={styles.icon}
            >
              <Icon name="sc-odnoklassniki" size={25}/>
            </Button>
             <Button 
                onPress = {()=>handleNavigation()}
                style={styles.icon}
            >
              <Icon name="sc-telegram" size={25}/>
            </Button>
        </Fab>
    )
}

ButtonFloat.propTypes = {
   open : PropTypes.bool.isRequired,
   onStateChange : PropTypes.func.isRequired,
   handleNavigation : PropTypes.func.isRequired
}

export default ButtonFloat;