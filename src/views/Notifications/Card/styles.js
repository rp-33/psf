import {StyleSheet} from 'react-native';

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
	ctnAvatar:{
		width:'100%',
		flexDirection:'row',
	},
	avatar:{
		width:50,
		height:50,
		borderRadius:25,
		marginHorizontal:10
	},
	title:{
		fontWeight:'bold',
		marginTop:5,
		textTransform:'capitalize'
	},
	message:{
		color:'#c7c7c7'
	},
	ctnRight:{
		marginLeft:10
	},
	icon:{
		width:25,
		height:25
	}
})

export default styles