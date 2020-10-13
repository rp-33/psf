import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
	ctn:{
		marginVertical:10,
        marginHorizontal:10,
   
	},
    item : {
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        height:44,
        justifyContent:'center'
    },
    ctnIconDelete:{
		width:20,
		height:20,
		borderRadius : 10,
		position : 'absolute',
		right:2,
		top:15,
		backgroundColor:color.primary,
		borderWidth:2,
		borderColor:'white',
		justifyContent:'center',
		alignItems:'center',
		zIndex:1000
	}
})

export default styles;