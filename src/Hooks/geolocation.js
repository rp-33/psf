import {useState,useEffect} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const geolocation = ()=>{

	const [coords,setCoords] = useState({longitude:null,latitude:null})

	useEffect(()=>{
		let  watchId = Geolocation.watchPosition(
            position => {                 
                let {latitude,longitude} = position.coords;
                setCoords({
                    latitude,
                    longitude,
                })
            },
            error => {
                console.log(error)
            },
            {enableHighAccuracy: true,distanceFiler:0,interval: 5000,fastestInterval: 2000}
        )
        return () => {
            if (watchId) Geolocation.clearWatch(watchId);
        }
       
	},[])

	return coords;
}

export default geolocation;