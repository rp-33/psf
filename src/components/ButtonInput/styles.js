import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctnInput:{
		marginVertical : 10
	},
    input : {
        borderRadius : 8,
        height:50
    },
    ctnText:{
        flex:1,
        height:50,
        paddingLeft:10,
        justifyContent:'center'
    },
	error: {
        fontStyle: 'italic',
        color: '#ed2f2f',
        fontSize: 15,
        marginTop: 3,
        marginLeft: 3,
    },
})

export default styles;