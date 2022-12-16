import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Marker from "./Marker";
import ClipLoader from "react-spinners";
import FailureGoogleMapLoading from "../errors/failure-google-map-loading";

const MapWrapper = ({ apiKey }) => {
  const mapRef = useRef();
  const [map, setMap] = useState();
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  const initializeGoogleMapIfNotInitialized = (elem) => {
    if (elem == null) {
      return;
    }

    if (!map) {
      mapRef.current = elem;
      setMap(
        new window.google.maps.Map(elem, {
          center: { lat: 35.6894, lng: 139.692 },
          zoom: 15
        })
      );
    }
  };

  // useEffect(() => {
  //   // setTimeout(() => {
  //   console.log("Entered");
  //   if (mapRef.current && !map) {
  //     console.log("Triggered");
  //     setMap(
  //       new window.google.maps.Map(mapRef.current, {
  //         // center: { lat: 35.6894, lng: 139.692 },
  //         // zoom: 15
  //       })
  //     );
  //   }
  //   // }, 2000);
  // }, [mapRef, map]);

  return (
    <div>
      <Wrapper apiKey={apiKey} render={render}>
        <div
          style={{ width: "600px", height: "600px" }}
          // ref={mapRef}
          ref={initializeGoogleMapIfNotInitialized}
        />
        <Marker />
      </Wrapper>
    </div>
  );
};

export default MapWrapper;
