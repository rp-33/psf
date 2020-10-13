import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {gradient} from '../../theme/';
import styles from './styles';


const Button = ({title,onPress})=>{
    return(
        <TouchableOpacity
            onPress = {()=>onPress()}
        >
            <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1.25, y: 1.25}} 
                colors={[gradient.init,gradient.end]} 
                style={styles.btn}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}


Button.propTypes = {
    title :  PropTypes.string.isRequired,
    onPress : PropTypes.func
}

export default Button;