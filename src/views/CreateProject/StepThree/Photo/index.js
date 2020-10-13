import React from 'react';
import {
	TouchableOpacity,
	Image,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';


const Photo = ({image,handleAddDelete,handleSelect,imagesSelect})=>{
	return(
		<TouchableOpacity 
			style={styles.ctnImage}
			onLongPress = {()=>handleAddDelete(image)} 
			onPress={()=>handleSelect(image)}
		>
			{imagesSelect.includes(image) &&
				<View style={styles.ctnIconDelete}>
					<Icon name="check" 
					 	color="white"
					 	size = {10}
					/>
				</View>
			}
			<Image
				source ={{uri:image}}
				style={styles.image}
			/>
		</TouchableOpacity>
	)
}

Photo.propTypes = {
	image : PropTypes.string.isRequired,
	handleAddDelete : PropTypes.func.isRequired,
	handleSelect : PropTypes.func.isRequired,
	imagesSelect : PropTypes.array.isRequired
}

export default Photo;