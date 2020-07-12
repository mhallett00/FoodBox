/*global google*/
import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

//@TODO - defaultCenter = userLocation?

function getLatLngByZipcode(zipcode) {
  var geocoder = new google.maps.Geocoder();
  var address = zipcode;
  geocoder.geocode({ address: "zipcode " + address }, function (
    results,
    status
  ) {
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
    } else {
      alert("Request failed.");
    }
  });
  // return [latitude, longitude];
}
getLatLngByZipcode("H3C0R6");
function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.5017, lng: -73.5673 }}
    ></GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
