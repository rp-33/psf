import {StyleSheet} from 'react-native';
import {color} from '../../../theme'

const styles = StyleSheet.create({
	ctn:{
		flexDirection:'row',
		marginVertical:10,
		justifyContent:'space-between',
		paddingHorizontal:20
	},
	ctnIcon:{
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
	},
	icon : {
		marginRight:5
	},
	share:{
		width:30,
		height:30,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:color.secondary,
		borderRadius:15
	}
})

export default styles;