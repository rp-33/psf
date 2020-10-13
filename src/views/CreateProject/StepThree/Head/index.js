import React from 'react';
import {
    Text,
    Platform,
} from 'react-native';
import {
    Header,
    Left,
    Right,
    Body,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons'
import {color} from '../../../../theme';
import PropTypes from 'prop-types';

const Head = ({ handleBack, title,handleImages,images,handleDelete }) => (
	<Header noShadow style={{borderBottomWidth: 0,backgroundColor: 'white'}} iosBarStyle='dark-content' androidStatusBarColor='white'>
        <Left style={Platform.OS === 'android' ? {flex:1} : null}>
            <Button primary transparent onPress={()=>handleBack()}>
               <Icon name="chevron-left" color={color.primary} size={45}/>
            </Button>
        </Left>
        <Body style={Platform.OS === 'android' ? {flex:2,alignItems: 'center'} : null}>
			<Text
                style = {{fontWeight:'bold',color:color.primary}}
            >
                {title}
            </Text>
        </Body>
        <Right style={Platform.OS === 'android' ? {flex:1} : null} >
        	<Button 
                primary 
                    transparent 
                    onPress={()=>images.length===0 ? handleImages() : handleDelete()}
                >    
                    <Icon name={images.length==0  ? "plus" : "trash"} color={color.primary} size={35}/>              
            </Button>
        </Right>
    </Header>
);


Head.proptypes = {
    handleBack : PropTypes.func.isRequired,
    handleImages : PropTypes.func.isRequired,
    title : PropTypes.string,
    images :  PropTypes.array.isRequired,
    handleDelete :  PropTypes.func.isRequired
};

export default Head;