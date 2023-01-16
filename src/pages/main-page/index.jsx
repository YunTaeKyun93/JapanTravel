import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import useLogic from "./useLogic";
import Map from "../../components/map";
import Header from "../../components/header";
import useStyles from "../styles";
import Menu from "./fragments/menu/index";
import MediaModal from "../../modals/media";
const MainPage = () => {
  const logic = useLogic();

  const style = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Menu logic={logic} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            className={style.mapContainer}
            center={logic.departureArea}
            mediaMarkers={logic.mediaMarkers}
            airportMarkers={logic.airports}
            requsetModalOpen={logic.requsetModalOpen}
            setSelectedPlace={logic.setSelectedPlace}
          />
        </Grid>
      </Grid>
      <MediaModal
        isOpen={logic.isMediaModalOpen}
        onRequestClose={() => logic.setIsMediaModalOpen(false)}
        media={logic.mediaMarkers}
        currentMedia={logic.currentMedia}
        place={logic.selectedPlace}
        relatedPlace ={logic.relatedPlace}
        relatedPlaceLoading={logic.relatedPlaceLoading}
      />
    </div>
  );
};

export default MainPage;
