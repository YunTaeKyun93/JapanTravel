import React, { useState, useRef, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const useMap = ({ center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState();
  const [zoom, setZoom] = useState(10);

  const initializeGoogleMapIfNotInitialized = (elem) => {
    if (elem == null) {
      return;
    }

    if (!map) {
      mapRef.current = elem;
      setMap(
        new window.google.maps.Map(elem, {
          center,
          zoom 
        })
      );
    }
  };

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setCenter(center);
    setZoom(20);
  }, [center]);

  const render = (status) => {
    return (
      <>
        <ClipLoader color="red" loading={status} size={150} />
        <h1>{status}</h1>
      </>
    );
  };

  return { map, initializeGoogleMapIfNotInitialized, render };
};

export default useMap;
