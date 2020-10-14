import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn:{
		width:'100%',
		height:'auto',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		paddingHorizontal:25,
		marginVertical:5,
		borderWidth:1,
		borderColor:'#c7c7c7',
		borderRadius:15,
		overflow:'hidden',
		paddingVertical:10
	},
	ctnImage:{
		width:'100%',
		flexDirection:'row',
	},
	icon:{
		position:'absolute',
		top:4,
		left:45,
		zIndex:2
	},
	image:{
		width:50,
		height:50,
		borderRadius:25,
		marginHorizontal:10
	},
	title:{
		fontWeight:'bold',
		marginTop:5
	},
	description:{
		color:'#c7c7c7'
	},
	money:{
		fontWeight:'bold',
		color:color.primary
	}
})

export default styles;