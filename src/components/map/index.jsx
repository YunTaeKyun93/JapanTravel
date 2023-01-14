import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import useGoogleApiKey from "../../servicies/google-api-key";
import styles from "classnames";
import useMediaMarkers from "./use-media-markers";
import useAirportMarkers from "./use-airport-markers";
import useMap from "./use-map";

const emptyArray = [];

const Map = ({
  className,
  style,
  center,
  mediaMarkers = emptyArray,
  airportMarkers = emptyArray,
  requsetModalOpen,
  currentMedia,
  setSelectedPlace
}) => {
  // 전역 서비스
  const apiKey = useGoogleApiKey();

  // 로컬 후크
  const { map, initializeGoogleMapIfNotInitialized, render } = useMap({
    center
  });
  useMediaMarkers({
    map,
    mediaMarkers,
    requsetModalOpen,
    currentMedia,
    setSelectedPlace
  });
  useAirportMarkers({ map, airportMarkers });
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <div className={className} ref={initializeGoogleMapIfNotInitialized} />
    </Wrapper>
  );
};

export default Map;
