import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Button from '../../../components/Button';
import {color} from '../../../theme';
import styles from './styles';
import {dateFormat} from '../../../utils/date';
import SliderImages from '../../../components/SliderImages';
import Avatar from '../../../components/Avatar';

const Card = ({user,item,handleNavigation,handleLike,handleDislike})=>{

	const like = (item.likes || []).findIndex(item=>(item.user === user));

	return(
		<View style = {styles.card}>
			<View style={styles.ctnAvatar}>
				<View style={styles.avatar}>
				<Avatar
					size={50}
					avatar ={item.user.avatar}
					sex = {item.user.sex}
				/>
				</View>
				<View>
					<Text style={styles.displayName}>{item.user.userName}</Text>
					<Text style={styles.date}>{dateFormat(item.create_at)}</Text>
				</View>
			</View>
			<Image 
				style = {styles.image}
				source = {{uri:item.images[0]}}				
			/>
			<View style={styles.information}>
				<Text style={styles.title}>{item.name}</Text>
				<View>
					<Text>{item.description}</Text>
					<TouchableOpacity onPress = {()=>handleNavigation('InformationProject',item)}>
						<Text style={{color:color.primary,fontWeight:'bold'}}>Ver mas...</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity style={[styles.childBottom,styles.ctnProgress]}>
					<Icon 
                		name="chart" 
                		size={27} color="black"
                		style={{marginRight:5}}
            		/>
					<Text>{(item.total_donations/item.amount)*100}%</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress = {()=>handleNavigation('Comments',item._id)}
					style={[styles.childBottom,styles.like]}
				>
					<Icon 
                		name="comment" 
                		size={27} color="black"
                		style={{marginRight:5}}
            		/>
					<Text>{item.comments.length}</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={[styles.childBottom,styles.comment]}
					onPress = {()=>(like!=-1) ? handleDislike(item) : handleLike(item)}
				>
					<Icon 
                		name="heart" 
                		size={27} 
                		color={(like!=-1) ? 'red' : 'black'}
                		style={{marginRight:5}}
            		/>
					<Text>{item.likes.length}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.button}>
				<Button 
					title="Contribuir"
					onPress= {()=>handleNavigation('Contribute',item._id)}
				/>
			</View>
		</View>
	)
}


export default Card;