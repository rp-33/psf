import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctn:{
		width:300,
		height:300,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 20,
		elevation: 1.61,
		marginVertical:20,
		borderRadius:20,
		backgroundColor:'white',
		overflow:'hidden'
	},
	image : {
		width:'100%',
		height:'100%'
	}
})

export default styles;