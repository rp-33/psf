import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    btn : {
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1.25,
        shadowRadius: 2.84,
        elevation: 3,
        marginVertical:15
    },
    text:{
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})

export default styles;