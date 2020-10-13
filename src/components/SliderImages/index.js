import React from 'react';
import {
	Image,
	TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import {width} from '../../constants/dimensions';
import PropTypes from 'prop-types';

const screen = width - 50;

const SliderImages = ({images,layout})=>{

	let carousel = {};

	const renderItem = ({item, index}) => {
        return (
        	<TouchableOpacity
        		style= {styles.ctn} 
        		onPress={ () => carousel.snapToItem(index)}
        	>
            	<Image 
					source ={{uri:item}}
					style= {styles.image}
				/>
			</TouchableOpacity>
        );
    }

	return(
		<Carousel
            ref={(c) => { carousel = c; }}
            data={images}
            layout={layout}
            renderItem={renderItem}
            sliderWidth={width}
          	itemWidth={screen}
        />
	)
}

SliderImages.propTypes = {
	images : PropTypes.array.isRequired,
	layout : PropTypes.string
}

export default SliderImages;