import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {
    Header,
    Left,
    Body,
    Input
} from 'native-base';
import PropTypes from 'prop-types';
import {color} from  '../../../theme';
import Icon from 'react-native-vector-icons/EvilIcons'

const Head = ({ handleBack,value, handleSearch}) => {
	return(
		<Header noShadow style={{backgroundColor:'white'}} iosBarStyle='dark-content' androidStatusBarColor='white'>
        	<Left style={Platform.OS === 'android' ? {flex:1,left:-5} : null}>
            	<TouchableOpacity style={{paddingHorizontal:5}} onPress={handleBack}>
                	<Icon 
                		name="close"
                		size={30}
                	/>
            	</TouchableOpacity>
        	</Left>
        	<Body style={Platform.OS==='android'?{flex:6}:null}>
            	<Input 
                	placeholder='Buscar'
                	autoFocus
                	value={value}
                	onChangeText={handleSearch}
            	/>
        	</Body>
	    </Header>
	)
};

Head.proptypes = {
    handleBack: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired
};

export default Head;