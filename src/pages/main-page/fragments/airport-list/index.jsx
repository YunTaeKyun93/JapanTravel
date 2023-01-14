import React from "react";
import { CssBaseline, Grid, Button } from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import ClipLoader from "react-spinners/ClipLoader";

const AirPortList = ({ logic }) => {
  if(logic.airportIsLoading){
    return <ClipLoader color="red" loading={logic.airportIsLoading} size={150} />;
  }
  const airports = logic.airports;
  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2} style={{ width: "100%" }}>
        {airports.map((airport, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Button variant="outlined" onClick={()=>logic.selectDepartureArea(airport.id)} >
              <LocalAirportIcon />
              {airport.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AirPortList;
