import React from 'react';
import {
    Image,
    Platform,
    Text
} from 'react-native';
import {
    Header,
    Left,
    Right,
    Body,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {color} from  '../../../theme';

const Head = ({handleNavigation,handleSos,sos,handleCancelSos})=>(

	<Header noShadow style={{borderBottomWidth: 0,backgroundColor: 'white',marginBottom: 10}} iosBarStyle='dark-content' androidStatusBarColor='white'>
        <Left style={Platform.OS === 'android' ? {flex:1} : null}>
        	<Button transparent onPress={()=>handleNavigation()}>
        		<Icon name="business" color={color.primary} size={25} />
        	</Button>
        </Left>
        <Body style={Platform.OS === 'android' ? {flex:1,alignItems: 'center'} : null}>
         	<Image source ={require('../../../assets/images/logo.png')} style={{width:30,height:30}} />       	
        </Body>
        <Right style={Platform.OS === 'android' ? {flex:1} : null}>
        	<Button transparent onPress={()=>sos ? handleCancelSos() : handleSos()}>
                {sos 
                ?
                    <Text style={{color:'black',fontWeight:'bold'}}>cancelar</Text>
                :
                    <Text style={{color:'red',fontWeight:'bold'}}>SOS</Text>
                }
        	</Button>
        </Right>
    </Header>

)

Head.proptypes = {
    handleNavigation : PropTypes.func.isRequired,
    handleSos :  PropTypes.func.isRequired
}

export default Head;