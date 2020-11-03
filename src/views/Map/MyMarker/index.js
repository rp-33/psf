import React from 'react';
import {View} from 'react-native';
import Svg, {
  Defs, Image, ClipPath, Path, Use, Text,
} from 'react-native-svg';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import {color} from '../../../theme';
import Avatar from '../../../components/Avatar';
import Emoji from '../Emoji/';
import styles from './styles';
 
const d = 'M 18,0 c -9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6 s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z';

const MyMarker = ({latitude,longitude,user,emotion})=>{
	return(
		<Marker
      coordinate={{
    		longitude: longitude,
    		latitude: latitude,
  	  }}
  	  tracksViewChanges={true}
    >
      <Svg
        width={45}
        height={57}
      >
        <Defs>
        	<ClipPath id={1}>
        			<Path
         			width={36}
          		height={48}
          		d={d}
        		/>
        	</ClipPath>
 
          <Path
          	id="border"
          	width={36}
          	height={48}
          	fill={color.primary}
          	fillOpacity={1}
          	strokeWidth="2"
          	scale={0.97}
          	d={d}
          />
        </Defs>
 				<Avatar 
 					size={36}
 					sex={user.sex}
 					avatar = {user.avatar}
 				/>
        <Use
          x={1}
          y={1}
          href="#border"
        />
      </Svg>
      {emotion!='' &&
        <View style={styles.ctnEmoji}>
          <Emoji 
            emotion = {emotion}
            width = {20}
            height = {20}
          />
        </View>
      }
    </Marker>
	)
} 

export default MyMarker;