import React,{useState,useEffect} from 'react';
import {
	FlatList
} from 'react-native';
import {
	Container
} from 'native-base';
import Head from '../../components/Head';
import Card from './Card';
import Loading from '../../components/LoadingMore';
import {useDispatch} from 'react-redux';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {apiFindNotification} from '../../apis/notification';

const Notifications = ({navigation})=>{
    
    const dispatch = useDispatch();
    const [notifications,setNotifications] = useState([]);
    const [loading,setLoading] = useState(false);
    const [nodata,setNodata] = useState(false);

    useEffect(()=>{
        findNotifications(notifications.length);
    },[]);

    const findNotifications = async(page)=>{
        try
        {
            setLoading(true);
            let {status,data} = await apiFindNotification(page);
            if(status===200)
            {
                if(data.length===0) return setNodata(true);
                setNotifications([...notifications,...data]);
            }
            else
            {
                dispatch(actionSetToast({visible:true,title:data.error}))   
            }   

        }
        catch(err)
        {
            dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))   
        }
        finally
        {
            setLoading(false);
        }

    }

    const handleLoadMore = ()=>{
        if(!nodata) findNotifications(notifications.length);  
    }


	return(
		<Container>
			<Head />
			<FlatList
                data = {notifications}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={nodata ? null : handleLoadMore}
                onEndReachedThreshold={0.01}
                initialNumToRender={20}
                ListFooterComponent = {
                    <Loading
                        loading = {loading}
                    />  
                } 
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