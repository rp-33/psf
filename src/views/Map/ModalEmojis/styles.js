import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  item:{
    width:30,
    height:30,
    borderRadius:12.55, 
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f2f2f2',
    marginHorizontal:7
  },
  img:{
    width:25,
    height:25
  }
})

export default styles;