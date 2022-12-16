import React, { useState, useEffect } from "react";
import useGoogleApiKeys from "../servicies/useGoogleApiKeys";

const Marker = (options) => {
  const [marker, setMarker] = useState("");

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    //   console.log('marker',marker)
    }
    
    return ()=>{
   
    }
  }, []);

  return <div>Marker</div>;
};

export default Marker;
