import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctn:{
		flex:1,
		paddingHorizontal:10
	},
	ctnImage:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	sectionImg:{
		width: 90,
		height:90,
		borderRadius:45,
		padding:10,
		marginTop:10,
	},
	ctnIcon:{
		justifyContent:'center',
		alignItems:'center',
		width:25,
		height:25,
		borderRadius:12.5,
		bottom:12,
		right:5,
		position:'absolute',
		shadowColor: "#c7c7c7",
		shadowOffset: {
			width: 2,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 0.84,
		elevation: 1.5,
		backgroundColor:'white'
	}
})

export default styles;