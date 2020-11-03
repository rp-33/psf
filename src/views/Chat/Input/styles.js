import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn : {
		width:'100%',
		paddingHorizontal : 10,
		paddingVertical:5,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
		backgroundColor:'#f1f1f1'
	},
	btn:{
		width:50,
		height:50,
		backgroundColor: 'white',
		marginLeft:10,
		borderRadius:25,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:2,
		borderColor:color.primary,
		alignSelf:'flex-end'
	},
	ctnInput:{
		position:'relative',
		minHeight:50,
		maxHeight: 150,
		flex:1,
		backgroundColor:'white',
		borderRadius:25,
		borderWidth:1,
		borderColor:color.primary,
		paddingLeft:10,
		paddingRight:10
	}
})

export default styles;