
import React, {useState} from 'react'
import ReactMapGL,{Marker, GeolocateControl, NavigationControl} from 'react-map-gl';
import {RoomSharp} from '@material-ui/icons';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';



const App = () => {

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude:0,
        longitude: 0,
        zoom: 15
      });
   const location = CurrentLocation();  
   const geolocateControlStyle= {
    right: 10,
    top: 10,
    position: "fixed"
  };
  const navControlStyle= {
    bottom: 10,
    top: 10,
    position: "fixed"
  };
    return (
        <div>
            <ReactMapGL
             {...viewport}
             mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
             onViewportChange={nextViewport => setViewport(nextViewport)}
             mapStyle="mapbox://styles/santhosh-dev07/ckqqyxzeb3pak17o9uy2xpwzu"
             >    
             {
               location.loaded ?<Marker latitude={location.coordinates.lat} longitude={location.coordinates.long} offsetLeft={-20} offsetTop={-10}>
                <RoomSharp />
              </Marker>
               : "Location is not available"
             }
             <GeolocateControl
              style={geolocateControlStyle}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
              auto
            />
           
             <Marker latitude={17.3457} longitude={78.5522} offsetLeft={-20} offsetTop={-10}>
                <RoomSharp Style="red"/>
              </Marker>             
              <NavigationControl style={navControlStyle} />
             </ReactMapGL>
        </div>
       
    );
}

export default App;