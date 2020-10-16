import React from 'react';
import {
    Text,
    Image,
    Platform,
} from 'react-native';
import {
    Header,
    Left,
    Right,
    Body,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import {color} from '../../theme';
import PropTypes from 'prop-types';

const Head = ({ handleBack, title }) => (
	<Header noShadow style={{borderBottomWidth: 0,backgroundColor: 'white'}} iosBarStyle='dark-content' androidStatusBarColor='white'>
        <Left style={Platform.OS === 'android' ? {flex:1} : null}>
        	{handleBack &&
                <Button primary transparent onPress={()=>handleBack()}>
                    <Icon name="chevron-left" color={color.primary} size={45}/>
                </Button>
            }
        </Left>
        <Body style={Platform.OS === 'android' ? {flex:2,alignItems: 'center'} : null}>
            {!title 
            ?
         	    <Image source ={require('../../assets/images/logo.png')} style={{width:30,height:30}} />       	
            :
                <Text
                    style = {{fontWeight:'bold',color:color.primary}}
                >
                    {title}
                </Text>
            }
        </Body>
        <Right style={Platform.OS === 'android' ? {flex:1} : null} />
    </Header>
);


Head.proptypes = {
    handleBack : PropTypes.func,
    title : PropTypes.string
};

export default Head;