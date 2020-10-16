import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn:{
		width:'100%',
		height:'auto',
		paddingHorizontal:10,
		marginBottom:20,
		flexDirection:'row'
	},
	bubble:{
		marginLeft:10,
		marginRight:70
	},
	ctnText:{
		paddingHorizontal:10,
		paddingVertical:5,
		width:'auto',
		backgroundColor:'#f1f1f1',
		borderBottomRightRadius:20,
		borderBottomLeftRadius:20,
		borderTopRightRadius:20,
		borderTopLeftRadius:1,
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