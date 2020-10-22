import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import {Container} from 'native-base';
import {useSelector} from 'react-redux';
import MapView,{Marker} from 'react-native-maps';
import styles from './styles';
import Head from './Head';
import MyMarker from './MyMarker';
import {geolocation} from '../../Hooks/';

const Map = ({navigation})=>{

    const user = useSelector(state => state.user);
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
                        <MyMarker
                            user = {user}
                            latitude = {coords.latitude}
                            longitude = {coords.longitude}
                        />
                        <Marker
                            image={require('../../assets/images/point-trabajo.png')}
                            coordinate={{
                                latitude: 10.316641,
                                longitude: -68.8851475,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title="Solitan empleado"
                        />
                        <Marker
                            image={require('../../assets/images/point-comercio.png')}
                            coordinate={{
                                latitude: 10.386641,
                                longitude: -68.8921475,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title="Solitan empleado"
                        />
                        <Marker
                            image={require('../../assets/images/point-casa.png')}
                            coordinate={{
                                latitude: 10.356641,
                                longitude: -68.8121475,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title="Solitan empleado"
                        />
                        <Marker
                            image={require('../../assets/images/point-evento.png')}
                            coordinate={{
                                latitude: 10.456641,
                                longitude: -68.9321475,
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