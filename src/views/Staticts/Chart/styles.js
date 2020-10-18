import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctn:{
		height: 200,
		padding:10,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 20,
		elevation: 1.61,
		borderRadius:20,
		marginHorizontal:10,
		marginTop:10
	},
	progress:{
		height: '100%' 
	},
	ctnText:{
		position:'absolute',
		top:'45%',
		left:'42.5%'
	},
	text:{
		fontSize:30
	}
})

export default styles;