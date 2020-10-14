import {StyleSheet} from 'react-native';
import {color} from '../../../theme'

const styles = StyleSheet.create({
    item:{
		backgroundColor:'white',
		flexDirection:'row',
		height:50,
		width:'100%',
		alignItems:'center',
		borderRadius:7,
        borderWidth:1,
        borderColor:'#c7c7c7'
    },
    countryCode:{
        width:70,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:'#c7c7c7',
        borderRightWidth:1,
        paddingHorizontal:10,
    },
    inputNumber:{
        paddingHorizontal:10
    },
    input :{
        width:'100%'
    },
    error: {
        fontStyle: 'italic',
        color: '#ed2f2f',
        fontSize: 15,
        marginTop: 3,
    }
})
export default styles;