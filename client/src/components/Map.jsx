import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

const Map = (props) => {
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCook, setSelectedCook] = useState(null);

  useEffect(() => {
    props.sellers.forEach((seller) => {
      Geocode.setApiKey("AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM");
      var address = seller.seller_postcode;
      Geocode.fromAddress(
        address,
        "AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM"
      ).then((res) => {
        setCoordinates((prevCoordinates) => [
          ...prevCoordinates,
          res.results[0].geometry.location,
        ]);
      });
    });
  }, [props.sellers]);
  return (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 45.5017, lng: -73.5673 }}>
      {coordinates.map((coordinate) => (
        <Marker
          key={coordinate.lat}
          position={{ lat: coordinate.lat, lng: coordinate.lng }}
          onClick={() => {
            setSelectedCook(coordinate);
          }}
        />
      ))}
    </GoogleMap>
  );
};

const WrappedMap = withGoogleMap(Map);
export default WrappedMap;
