import React from "react";
import useLogic from "./useLogic";
import MapWrapper from "../../components/Map";
import SearchBar from "../../components/SearchBar";

const MainPage = () => {
  const logic = useLogic();
  return (
    <div>
      <SearchBar />
      <MapWrapper apiKey={logic.googleApiKeys} />
    </div>
  );
};

export default MainPage;
