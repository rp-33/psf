import React,{Fragment} from 'react';
import { Avatar } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';

const AvatarImage = ({avatar,sex,size})=>{
	return(
		<Fragment>
		{
		avatar
		?
			<Avatar.Image 
				style = {styles.img}
				size={size}
				source ={{uri:avatar}}
			/>
		:
			<Avatar.Image 
				style={styles.img}
				size={size}
				source={sex==="male" ? require('../../assets/images/hombre.png') : require('../../assets/images/mujer.png')}
			/>
		}
		</Fragment>
	)
}

AvatarImage.defaultProps = {
	size : 50
}

AvatarImage.propTypes = {
	avatar : PropTypes.string,
	size : PropTypes.number.isRequired,
	sex: PropTypes.string
}

export default AvatarImage;