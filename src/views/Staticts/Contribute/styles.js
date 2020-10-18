import {StyleSheet} from 'react-native';
import {color} from '../../../theme/'

const styles = StyleSheet.create({
	ctn:{
		marginHorizontal:5,
		width:110,
		height:150,
		borderRadius:20,
		alignItems:'center',
		justifyContent:'center',
	},
	ctnInf:{
		marginTop:10,
		alignItems:'center'
	},
	text:{
		color : 'white'
	},
	name : {
		textTransform:'capitalize'
	}

})

export default styles;