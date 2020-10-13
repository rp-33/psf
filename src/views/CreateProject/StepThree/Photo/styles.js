import {StyleSheet} from 'react-native';
import {width} from '../../../../constants/dimensions';
import {color} from '../../../../theme'

let screen = width/3;

const styles = StyleSheet.create({
	ctnImage :{
		width:screen,
		height:screen,
		borderWidth:1,
		borderColor:'#f1f1f1',
		position:'relative'
	},
	image : {
		flex:1
	},
	ctnIconDelete:{
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