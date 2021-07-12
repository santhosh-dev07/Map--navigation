
import  {useState} from 'react';
import ReactMapGL,{Marker, GeolocateControl, NavigationControl} from 'react-map-gl';
import {RoomSharp} from '@material-ui/icons';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import Button from '@material-ui/core/Button';

const App = () => {

  const buttonStyles = {
    right: 30,
      bottom: 20,
      position:"fixed"
  }
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude:0,
        longitude: 0,
        zoom: 15,
        pitch: 20
      });

   const location = CurrentLocation();  
   
   const geolocateControlStyle= {
    right: 20,
    top: 20,
    position: "fixed"
  };
  const navControlStyle= {
    bottom: 10,
    top: 20,
    left: 20,
    position: "fixed"
  };

  const markerStyle={
    color: "Red",
  }

  const handleClick = ()=>{

    // if(latitude !== location.coordinates.lat || longitude !== location.coordinates.long){
    //   //location is changing
    //   if(latitude!== 0 && longitude!== 0){
    //step-1 ... remove old marker using global lat and long
      // }
    //step-2: 
    // latitude = location.coordinates.lat;
    // longitude = location.coordinates.long;
    // step-3
    
//     location.loaded ?<Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
//   <RoomSharp />
// </Marker>
// : "Location is not available"
    //i have current location{lat, long}
    //show a marker on current location
    //random user location.....with red marker
    // a) travelling ...movement done by marker
    // b) display a blue color line {distance}
    //then start changing marker when current location changes/updates.
  }

    return (
        <div>
            <ReactMapGL
             {...viewport}
             mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
             onViewportChange={nextViewport => setViewport(nextViewport)}
             mapStyle="mapbox://styles/santhosh-dev07/ckqqyxzeb3pak17o9uy2xpwzu"
             >   
             <GeolocateControl
              style={geolocateControlStyle}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
              auto
            />
            
            <Button variant="contained" color="primary" style={buttonStyles} onClick={handleClick}>start</Button>
           
             <Marker latitude={17.3457} longitude={78.5522} offsetLeft={-20} offsetTop={-10}>
                <RoomSharp style={markerStyle}/>
              </Marker>             
              <NavigationControl style={navControlStyle} />
             </ReactMapGL>
        </div>
       
    );
}

export default App;