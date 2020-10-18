import React,{useState,useEffect} from 'react';
import {
	View,
	FlatList
} from 'react-native';
import {Container} from 'native-base';
import {useDispatch,useSelector} from 'react-redux';
import Card from './Card';
import ButtonCard from '../../components/ButtonCard';
import Head from '../../components/Head';
import styles from './styles';
import {
	apiFindProjects,
	apiLike,
	apiDislike
} from '../../apis/crowdfunding';
import {actionSetToast} from '../../actions/toast';
import Loading from '../../components/LoadingMore';

const Crowdfunding = ({navigation})=>{

	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const [projects,setProjects] = useState([]);
	const [loading,setLoading] = useState(false);
	const [nodata,setNodata] = useState(false);

	useEffect(()=>{
		_findProjects(projects.length);
	},[])

	const _findProjects = async(page)=>{
		try
		{
			setLoading(true)
			let {status,data} = await apiFindProjects(page);
			if(status==200)
			{
				if(data.length===0) return setNodata(true);
				setProjects([...projects,...data]);
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
			setLoading(false)
		}
	}

	const handleLoadMore = ()=>{
		if(!nodata) _findProjects(projects.length);
		
	}

	const handleLike = async({_id})=>{
		try
		{
			setProjects(projects.map(item=>(item._id==_id ? {...item,likes:item.likes.concat({user:user._id})} : item)))
			let {status,data} = await apiLike(_id);
			if(status!=201)
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}))		
			}
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))	
		}
	}

	const handleDislike = async({_id})=>{
		try
		{
			setProjects(projects.map(item=>(item._id==_id ? {...item,likes:item.likes.filter(like=>(like.user !=user._id))} : item)));
			let {status,data} = await apiDislike(_id);
			if(status!=201)
			{
				dispatch(actionSetToast({visible:true,title:data.error || 'Error'}))	
			}
		}
		catch(err)
		{
			dispatch(actionSetToast({visible:true,title:'Error en el servidor'}))	
		}
	}


	return(
		<Container>
			<Head />
            <FlatList
            	ListHeaderComponent={
					<ButtonCard 
						image = "comenzar"
						text = "Ver mis proyectos creados."
						onPress = {()=>navigation.push('MyProjects')}
					/>
     			}
               	data = {projects}
				keyExtractor={(item, index) => index.toString()}
                onEndReached={nodata ? null : handleLoadMore}
          		onEndReachedThreshold={0.01}
          		initialNumToRender={20}
          		style = {styles.ctnList}
          		ListFooterComponent = {
          			<Loading
          				loading = {loading}
          			/>	
          		}  
                renderItem = {({item,index})=>(
                    <Card 
                    	key = {item._id}
                    	item = {item}
                    	handleNavigation = {(root,params)=>navigation.push(root,params)}
                    	handleLike = {handleLike}
                    	handleDislike = {handleDislike}
                    	user = {user._id}
                    />
                )}
            />
		</Container>
	)
}

export default Crowdfunding;