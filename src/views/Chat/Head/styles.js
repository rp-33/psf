import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctnRow:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	},
	image : {
		width:30,
		height:30,
		borderRadius:15,
		marginHorizontal:10
	},
	name :{
		fontSize:15,
		fontWeight:'bold',
		textTransform:'capitalize',
		marginLeft:10,
		color:'white'
	}
})

export default styles;