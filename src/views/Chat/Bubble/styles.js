import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn:{
		width:'100%',
		height:'auto',
		paddingHorizontal:10,
		marginBottom:20,
	},
	floatLeft:{
		flexDirection:'row'
	},
	floatRight:{
		flexDirection:'row-reverse'
	},
	bubbleLeft:{
		marginLeft:10,
		marginRight:70
	},
	bubbleRight:{
		marginLeft:70,
		marginRight:10
	},
	ctnTextRight:{
		paddingHorizontal:10,
		paddingVertical:5,
		width:'auto',
		backgroundColor:'white',
		borderWidth:1,
		borderColor:'white',
		borderBottomRightRadius:20,
		borderBottomLeftRadius:20,
		borderTopRightRadius:20,
		borderTopLeftRadius:1,
	},
	ctnTextLeft:{
		paddingHorizontal:10,
		paddingVertical:5,
		width:'auto',
		backgroundColor:'white',
		borderWidth:1,
		borderColor:'white',
		borderBottomRightRadius:20,
		borderBottomLeftRadius:20,
		borderTopRightRadius:1,
		borderTopLeftRadius:20,
	},
	name :{
		fontWeight:'bold',
		textTransform:'capitalize'
	},
	date:{
		color:color.primary,
		marginTop:5,
		textAlign:'right'
	}

})

export default styles;