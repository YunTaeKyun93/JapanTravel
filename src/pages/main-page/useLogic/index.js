import React,{useState} from "react";
import useGoogleApiKeys from "../../../servicies/useGoogleApiKeys";
const useLogic = () => {
  


    const googleApiKeys = useGoogleApiKeys();




  return {
    googleApiKeys
  };
};

export default useLogic;
