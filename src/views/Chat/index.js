import React,{useState,useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container} from 'native-base';
import {useDispatch,useSelector} from 'react-redux';
import Head from './Head';
import Bubble from './Bubble';
import Input from './Input';
import {actionSetToast} from '../../actions/toast';
import {apiCreateChatText,apiFindChats} from '../../apis/chat';
import Loading from '../../components/LoadingMore';

const Chat =({navigation,route})=>{

	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const [chats,setChats] = useState([]);
	const [loading,setLoading] = useState(false);
	const [nodata,setNodata] = useState(false);

	useEffect(()=>{
		findChats(user.country,chats.length);
	},[])

	const findChats = async(country,page)=>{
		try
		{
			let {status,data} = await apiFindChats(country,page);
			if(status===200)
			{
				if(data.length===0) return setNodata(true);
				setChats([...chats,...data]);
			}
			else
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}))	
			}	

		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))	
		}
	}

	const handleSend = async(text)=>{
		tryvi
		{
			let chat = [{
				user: {
					sex : user.sex,
					avatar : user.avatar,
					userName : user.userName,
					_id :  user._id
				},
				text : text,
				create_at : new Date()
			}];
			setChats([...chat,...chats])	     
			
			let { status, data } = await apiCreateChatText(user.country,text);
			if(status === 201)
			{
				
			}
			else
			{
				
			}
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))	
		}
	}

	const handleLoadMore = ()=>{
		if(!nodata) findChats(user.country,chats.length);	
	}

	return(
		<Container>
			<Head
				title = {user.country}
				handleBack = {()=>navigation.goBack()}
			/>
			<FlatList
                data = {chats}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={nodata ? null : handleLoadMore}
          		onEndReachedThreshold={0.01}
          		initialNumToRender={20}
          		inverted = {true}
          		style={{flex:1,backgroundColor:'#f1f1f1'}}
          		ListFooterComponent = {
          			<Loading
          				loading = {loading}
          			/>	
          		}                	
                renderItem = {({item,index})=>(
                    <Bubble
                    	key = {index}
                    	item = {item}
                    	idUser = {user._id}
                    />
                )}
            />
            <Input
               	handleSend = {handleSend}
            />
		</Container>
	)
	
}

export default Chat;