import React,{useState,useEffect} from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native';
import {Container} from 'native-base';
import {useDispatch} from 'react-redux';
import Head from '../../components/Head';
import ButtonCard from '../../components/ButtonCard';
import Project from './Project';
import styles from './styles';
import {apiFindMyProjects} from '../../apis/crowdfunding';
import {actionSetToast} from '../../actions/toast';
import Loading from '../../components/LoadingMore';

const MyProjects = ({navigation})=>{

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
			let {status,data} = await apiFindMyProjects(page);
			if(status===200)
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
			setLoading(false);
		}
	}

	const handleLoadMore = ()=>{
		if(!nodata) _findProjects(projects.length);	
	}

	return(
		<Container>
			<Head
				handleBack = {()=>navigation.goBack()}
				title="Mis Proyectos"
			/>
			<FlatList
				ListHeaderComponent ={
					<View style={styles.ctnButton}>
						<ButtonCard 
							image = "comenzar"
							text = "Crear proyecto."
							onPress = {()=>navigation.push('CreateProject')}
						/>
					</View>
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
                   	<Project
                   		key = {item._id}
                   		item = {item}
                   		handleNavigation = {(_id,name,total_donations,amount)=>navigation.push('Staticts',{_id,name,total_donations,amount})}
                   	/>
               	)}
            />
		</Container>
	)
}

export default MyProjects;