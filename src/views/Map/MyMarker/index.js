import React from 'react';
import Svg, {
  Defs, Image, ClipPath, Path, Use, Text,
} from 'react-native-svg';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import {color} from '../../../theme';
import Avatar from '../../../components/Avatar';
 
const d = 'M 18,0 c -9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6 s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z';


const MyMarker = ({latitude,longitude,user})=>{
	return(
		<Marker
        	coordinate={{
          		longitude: longitude,
          		latitude: latitude,
        	}}
        	tracksViewChanges={false}
      	>
        	<Svg
          		width={40}
          		height={52}
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
      	</Marker>
	)
} 

export default MyMarker;