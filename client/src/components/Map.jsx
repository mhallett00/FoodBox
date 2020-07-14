import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = (props) => {
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCook, setSelectedCook] = useState(null);

  const findCookFromCoordinates = (sellers, coordinates) => {
    let sellerRet;
    sellers.forEach((seller) => {
      if (seller.seller_postcode == coordinates.po) {
        sellerRet = seller;
        sellerRet.location = coordinates.co;
      }
    });
    return sellerRet;
  };
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
          { co: res.results[0].geometry.location, po: seller.seller_postcode },
        ]);
      });
    });
  }, [props.sellers]);
  return (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 45.5017, lng: -73.5673 }}>
      {selectedCook && (
        <InfoWindow
          position={{
            lat: selectedCook.location.lat,
            lng: selectedCook.location.lng,
          }}
          onCloseClick={() => {
            setSelectedCook(null);
          }}
        >
          <div>
            <h2>
              {selectedCook.first_name} {selectedCook.last_name}
            </h2>
          </div>
        </InfoWindow>
      )}
      {coordinates.map((coordinate) => (
        <Marker
          key={coordinate.lat}
          position={{ lat: coordinate.co.lat, lng: coordinate.co.lng }}
          onClick={() => {
            const cookToSelect = findCookFromCoordinates(
              props.sellers,
              coordinate
            );
            setSelectedCook(cookToSelect);
          }}
        />
      ))}
    </GoogleMap>
  );
};

const WrappedMap = withGoogleMap(Map);
export default WrappedMap;
