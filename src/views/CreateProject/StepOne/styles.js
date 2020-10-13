import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn:{
		paddingHorizontal:10,
		flex:1
	},
	ctnTitle:{
		marginBottom:20
	},
	title:{
		fontWeight:'bold',
		fontSize:19
	},
	card:{
		width:'100%',
		height:120,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 20,
		elevation: 1.61,
		borderRadius:20,
		marginBottom:40,
		overflow:'hidden',
		position:'relative'
	},
	image:{
		width:'100%',
		height:120
	},
	icon:{
		position:'absolute',
		top:10,
		right:10,
		zIndex:1
	},
	ctnText:{
		position:'absolute',
		bottom:10,
		left:10,
		zIndex:2
	},
	text:{
		fontWeight:'bold',
		color:color.secondary
	},
	ctnButton:{
		marginTop:10
	}
})

export default styles;