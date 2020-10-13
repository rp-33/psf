import React,{useState} from 'react';
import {
	FlatList
} from 'react-native';
import {
	Container
} from 'native-base';
import Head from '../../components/Head';
import Card from './Card';


const Notifications = ({navigation})=>{
    
    const [notifications,setNotifications] = useState([
    			{
    				displayName : 'displayName',
    				message : "Te ha contribuido",
    				type : 'donation'
    			},
    			{
    				displayName : 'displayName',
    				message : "Le ha dado me gusta",
    				type : 'like'
    			},
    			{
    				displayName : 'displayName',
    				message : "Ha comentado",
    				type : 'comment'
    			},
    			{
    				displayName : 'displayName',
    				message : "Ha Conseguido su financiamiento",
    				type : 'crowdfunding'
    			}
    		])


	return(
		<Container>
			<Head />
			<FlatList
                data = {notifications}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={20}
                style={{paddingHorizontal:10}}
                renderItem = {({item,index})=>(
                    <Card
 						key = {index}
 						item = {item}
                    />
                )}
            />
		</Container>
	)
	
}

export default Notifications;