import React, {useState, useEffect} from 'react';

const UserLocation = () => {
    const [userLocation, setLocation] = useState({
        loaded: false,
        coordinates: {lat:"", long:""}
    });

    const onSuccess = location =>{
        setLocation({
            loaded: true,
            coordinates: {
                lat: 17.3457,
                long: 78.5522
            },
        });
    };

    const onError = error =>{
        setLocation({
            loaded: true,
            error,
        });
    }

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
             code:0,
             message: "Geolocation not found!",
         });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
     }, [])
   
    return userLocation;
    
}

export default UserLocation;