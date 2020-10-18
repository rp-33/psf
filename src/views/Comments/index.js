import React,{useState,useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container} from 'native-base';
import {useDispatch,useSelector} from 'react-redux';
import Head from '../../components/Head';
import Bubble from './Bubble';
import Input from './Input';
import {actionSetToast} from '../../actions/toast';
import {actionSetLoading} from '../../actions/loading';
import {apiCreateComment,apiFindComments} from '../../apis/crowdfunding';
import Loading from '../../components/LoadingMore';

const Comments =({navigation,route})=>{

	const user = useSelector(state => state.user);
	const id = route.params;
	const dispatch = useDispatch();
	const [comments,setComments] = useState([]);
	const [loading,setLoading] = useState(true);
	const [nodata,setNodata] = useState(false);

	useEffect(()=>{
		findComments(id,comments.length);
	},[])

	const findComments = async(id,page)=>{
		try
		{
			let {status,data} = await apiFindComments(id,page);
			if(status===200)
			{
				if(data.length===0) return setNodata(true);
				setComments([...comments,...data]);
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

	const handleSend = async(text)=>{
		try
		{
			dispatch(actionSetLoading(true));
			let { status, data } = await apiCreateComment(id,text);
			if(status === 201)
			{
				dispatch(actionSetToast({visible:true,title:data.message}));
				let comment = {
					user: {
						sex : user.sex,
						avatar : user.avatar,
						userName : user.userName
					},
					text : text,
					create_at : data.create_at
				};

				setComments([...comments,comment])	     
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
		finally
		{
			dispatch(actionSetLoading(false));
		}
	}

	const handleLoadMore = ()=>{
		if(!nodata) findComments(id,comments.length);	
	}

	return(
		<Container>
			<Head
				title = "Comentarios"
				handleBack = {()=>navigation.goBack()}
			/>
			<FlatList
                data = {comments}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={nodata ? null : handleLoadMore}
          		onEndReachedThreshold={0.01}
          		initialNumToRender={20}
          		ListFooterComponent = {
          			<Loading
          				loading = {loading}
          			/>	
          		}                	
                renderItem = {({item,index})=>(
                    <Bubble
                    	key = {index}
                    	item = {item}
                    />
                )}
            />
            <Input
               	handleSend = {handleSend}
            />
		</Container>
	)
	
}

export default Comments;