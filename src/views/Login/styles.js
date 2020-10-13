import {StyleSheet,PixelRatio} from 'react-native';

const styles = StyleSheet.create({
	ctnForm:{
		flex:1,
		paddingHorizontal:10,
		alignItems:'center',
		justifyContent:'center'
	},
	form:{
		width:'100%',
		marginBottom:50	
	},
	ctnRecover:{
		width:'100%',
		borderTopWidth:1/PixelRatio.getPixelSizeForLayoutSize(1),
		borderTopColor:'black',
		paddingTop:15,
		alignItems:'center'
	},
	textRecover:{
		fontWeight:'bold',
		color:'black'
	}

})

export default styles;