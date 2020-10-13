import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctn :{
		width : '100%',
		height: 80,
		marginTop:30,
		justifyContent:'center',
		alignItems:'center'
	},
	loading:{
		backgroundColor:'white',
		width:40,
		height:40,
		borderRadius:20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 5.84,
		elevation: 6
	}
})

export default styles;