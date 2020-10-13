import {StyleSheet} from 'react-native';
import {width} from '../../../constants/dimensions';

const height_image = width - 20;

const styles = StyleSheet.create({
	card:{
		width:'100%',
		height:'auto',
		marginVertical:20,
		borderRadius:20,
		overflow:'hidden',
		paddingVertical:10,
		borderWidth:1,
		borderColor:'#c7c7c7'
	},
	image : {
		width:'100%',
		height: height_image
	},
	ctnAvatar:{
		width:'100%',
		marginBottom:10,
		flexDirection:'row'
	},
	avatar:{
		marginHorizontal:10
	},
	displayName:{
		fontWeight:'bold',
		marginTop:5,
		textTransform:'capitalize'
	},
	date:{
		color:'#c7c7c7'
	},
	information:{
		marginTop:10,
		paddingHorizontal:10
	},
	bottom:{
		marginHorizontal:10,
		flexDirection:'row'
	},
	title:{
		fontWeight:'bold',
		fontSize:20
	},
	childBottom:{
		justifyContent:'center',
		alignItems:'center',
		marginVertical:10,
		flexDirection:'row'
	},
	like:{
		flex:1
	},
	ctnProgress:{
		flex:1
	},
	comment:{
		flex:1
	},
	button:{
		marginHorizontal:13
	}
})

export default styles;