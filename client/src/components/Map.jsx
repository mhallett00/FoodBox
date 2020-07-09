import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {
  return (
    <div>
    </div>
  )
}

// const containerStyle = {
//   width: '80vw',
//   height: '60vh'
// };

// const center = {
//   lat: 45.501,
//   lng: -73.567
// };

// const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
// function Map() {
//   return (
//     <LoadScript
//       googleMapsApiKey={API_KEY}
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(Map)

// function MapWindow() {
//   return (
//     <GoogleMap 
//       defaultZoom={10} 
//       defaultCenter={{lat: 45.501690, lng: -73.567253}}
//     />
//   );
// }
// // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
// const WrappedMap = withScriptjs(withGoogleMap(MapWindow))

// export default function Map() {
//   return (
//     <>
//     <h1>Map</h1>
//     <div style={{width: "40vw", height: "40vh"}}>
//       <WrappedMap 
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
//         loadingElement={<div style={{height: "100%"}}/>} 
//         containerElement={<div style={{height: "100%"}}/>} 
//         mapElement={<div style={{height: "100%"}}/>} 
//       />
//     </div>
//     <h1>Here</h1>
//     </>
//   )
// }