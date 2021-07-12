import React, {useState, useEffect} from 'react';

const CurrentLocation = () => {

        const [location, setLocation] = useState({
            loaded: false,
            coordinates: {lat:"", long:""}
        });

        const onSuccess = location =>{
            setLocation({
                loaded: true,
                coordinates: {
                    lat: location.coords.latitude,
                    long: location.coords.longitude
                },
            });
        };

        const onError = error =>{
            setLocation({
                loaded: true,
                error,
            });
        }


        //step1: delay of 2 seconds pass the value of  lat and long
        useEffect(() => {
           if(!("geolocation" in navigator)){
               onError({
                code:0,
                message: "Geolocation not found!",
            });
           }
           navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }, [])

      
    return location ;
}

export default CurrentLocation;
