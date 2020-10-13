import React,{useState,useEffect} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const geolocation = ()=>{

    let watchId;
	const [coords,setCoords] = useState({longitude:null,latitude:null})

	useEffect(()=>{
		getPosition();
        return ()=>{
            Geolocation.clearWatch(watchId);
        }
	},[])

	const permissionsLocation = async()=>{
		const response = await request(Platform.select({
    		android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    		ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  		}))

  		return response;
	}

	const getPosition = async()=>{
        const granted = await permissionsLocation();

        if(granted == 'authorized' || granted == 'granted'){
        	watchId = Geolocation.watchPosition(
                position => {                 
                	let {latitude,longitude} = position.coords;
                	setCoords({
                		latitude:latitude,
                   		longitude : longitude
                   	})
                },
                error => {
                    console.log(error)
                },
                {enableHighAccuracy: false, interval: 10000,showLocationDialog:true }
            )
         
        }
        else if(granted == 'denied')
        {
 			
        }
    }

	return coords;
}

export default geolocation;