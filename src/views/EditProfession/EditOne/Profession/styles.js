import {StyleSheet} from 'react-native';
import {width} from '../../../../constants/dimensions';
import {color} from '../../../../theme'

let screen = (width/2) - 30;

const styles = StyleSheet.create({
	ctn :{
		width:screen,
		height:screen,
		borderWidth:1,
		borderColor:'#f1f1f1',
		position:'relative',
		borderRadius:20,
		marginHorizontal:15,
		marginVertical:10,
		overflow:'hidden',
		justifyContent:'center',
		alignItems:'center'
	},
	img: {
		width:60,
		height:60,
		marginBottom:10
	},
	ctnIcon:{
		width:20,
		height:20,
		borderRadius : 10,
		position : 'absolute',
		right:2,
		top:2,
		backgroundColor:color.primary,
		borderWidth:2,
		borderColor:'white',
		justifyContent:'center',
		alignItems:'center',
		zIndex:1000
	}
})

export default styles;