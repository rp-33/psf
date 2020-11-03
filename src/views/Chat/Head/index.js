import React from 'react';
import {
    Text,
    Image,
    Platform,
    View
} from 'react-native';
import {
    Header,
    Left,
    Right,
    Body,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import {color} from '../../../theme';
import PropTypes from 'prop-types';
import styles from './styles'

const Head = ({ handleBack, title }) => (
	<Header noShadow style={{borderBottomWidth: 0,backgroundColor: color.primary}} iosBarStyle='dark-content' androidStatusBarColor='white'>
        <Left style={Platform.OS === 'android' ? {flex:1} : null}>
        	{handleBack &&
                <Button primary transparent onPress={()=>handleBack()}>
                    <Icon name="chevron-left" color="white" size={45}/>
                </Button>
            }
        </Left>
        <Body style={Platform.OS === 'android' ? {flex:7,marginRight:5} : null}>
            <View style={styles.ctnRow}>
         	    <Image 
         	    	style={styles.image}
         	    	source ={require('../../../assets/images/logo.png')} 
         	    />       	
                <Text
                    style = {styles.name}
                >
                    Grupo {title}
                </Text>
            </View>
        </Body>
        <Right style={Platform.OS === 'android' ? {flex:1} : null} />
    </Header>
);


Head.proptypes = {
    handleBack : PropTypes.func,
    title : PropTypes.string
};

export default Head;