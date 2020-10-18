import React,{useState,useEffect} from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableHighlight
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
	Container,
	Content
} from 'native-base';
import Head from '../../components/Head';
import Button from '../../components/Button';
import Loading from './Loading';
import Chart from './Chart';
import Contribute from './Contribute';
import styles from './styles';
import {apiFindContributors} from '../../apis/crowdfunding';
import {actionSetToast} from '../../actions/toast';

const Staticts = ({navigation,route})=>{

	const {name,_id,total_donations,amount} = route.params;
	const dispatch = useDispatch();
	const [contributors,setContributors] = useState([]);
	const [loading,setLoading] = useState(false); 
	const [nodata,setNodata] = useState(false);

	useEffect(()=>{
		findContributors(_id,contributors.length);
	},[])

	const findContributors = async(_id,page)=>{
		try
		{
			setLoading(true)
			let {status,data} = await apiFindContributors(_id,page);
	
			if(status===200)
			{

				if(data.length===0) return setNodata(true);
				setContributors([...contributors,...data]);
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
		if(!nodata) findContributors(_id,contributors.length);	
	}

	const handleWithdraw = ()=>{

	}


	return(
		<Container>
			<Head 
				title = {name}
				handleBack = {()=>navigation.goBack()}
			/>
			<Content>
				<Chart 
					percentaje = {(total_donations/amount)*100}
				/>
				<View style={styles.ctnPerson}>
					<Text style={styles.text}>Personas que han contribuido</Text>
					<FlatList 
						data = {contributors}
						keyExtractor={(item, index) => index.toString()}
						onEndReached={nodata ? null : handleLoadMore}
          				onEndReachedThreshold={0.01}
          				initialNumToRender={10}
						horizontal={true}
        				showsHorizontalScrollIndicator = {false}
        				style = {styles.scrollView}
        				contentContainerStyle ={{
        					alignItems : 'center',
        					paddingTop: 5,
        					paddingEnd: 5
        				}}
        				ListFooterComponent = {
          					<Loading
          						loading = {loading}
          					/>	
          				}  
						renderItem = {({item,index})=>(
							<Contribute 
								key = {item._id}
								item = {item}
							/>
                		)}

					/>
				</View>

				{(total_donations > amount || total_donations === amount) &&
					<View style={styles.btn}>
						<Button 
							title = "Retirar fondos"
							onPress = {handleWithdraw}
						/>
					</View>
				}
			</Content>
		</Container>
	)
}

export default Staticts;