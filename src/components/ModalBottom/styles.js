import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection:'row'
  },
  item:{
    width:70,
    height:70,
    borderRadius:35, 
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f2f2f2'
  },
  img:{
    width:35,
    height:35
  }
})

export default styles;