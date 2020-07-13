/*global google*/
import React from "react";
import Geocode from "react-geocode";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

//@TODO - defaultCenter = userLocation?

function getLatLngByZipcode(zipcode) {
  Geocode.setApiKey("AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM");
  // var geocoder = new google.maps.Geocoder();
  var address = zipcode;
  // geocoder.geocode({ address: "zipcode " + address }, function (
  //   results,
  //   status
  // ) {
  Geocode.fromAddress(
    address,
    "AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM"
  ).then((res) => console.log(res));

  // console.log(status, "STATUS");
  //   if (status == google.maps.GeocoderStatus.OK) {
  //     var latitude = results[0].geometry.location.lat();
  //     var longitude = results[0].geometry.location.lng();
  //     console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
  //   } else {
  //     console.log("Request failed.");
  //   }
  // });
  // return [latitude, longitude];
}
getLatLngByZipcode("H3C0R6");

// Geocode.fromAddress("Eiffel Tower").then(
//   (response) => {
//     console.log(response);
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng, "location found");
//   },
//   (error) => {
//     console.error(error, "GEOCODE ERROR");
//   }
// );

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.5017, lng: -73.5673 }}
    ></GoogleMap>
  );
}

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
