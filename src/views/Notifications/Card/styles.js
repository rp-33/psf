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
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 20,
		elevation: 1.61,
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
		marginTop:5
	},
	message:{
		color:'#c7c7c7'
	}
})

export default styles