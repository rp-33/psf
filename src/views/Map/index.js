import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import {Container} from 'native-base';
import MapView,{Marker} from 'react-native-maps';
import styles from './styles';
import Head from './Head';
import {geolocation} from '../../Hooks/';

const Map = ({navigation})=>{

    const coords = geolocation();

	return(
		<Container>
            <Head 
                handleNavigation = {()=>navigation.push('WorkConfiguration')}
                handleSos = {()=>console.log('modal')}
            />
			<View style={styles.ctn}>
                {(coords.latitude && coords.longitude) && 
                <MapView
                    style = {styles.ctn}
                    initialRegion={{
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    >
                        <Marker
                            title="Yo"
                            coordinate={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                        <Marker
                            image={require('../../assets/images/pin-work.png')}
                            coordinate={{
                                latitude: 10.356641,
                                longitude: -68.8221475,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title="Solitan empleado"
                        />
                        
                    </MapView>
                    }
                </View>
		</Container>
	)
}

export default Map;