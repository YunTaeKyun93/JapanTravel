import React from "react";
import { CssBaseline, Grid, Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import ClipLoader from "react-spinners/ClipLoader";

const AnimeList = ({ logic }) => {
  if (logic.animeListIsLoading) {
    return <ClipLoader color="red" loading={logic.mediaIsLoading} size={150} />;
  }
  const animeList = logic.animeList;
  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2} style={{ width: "100%" }}>
        {animeList.map((anime) => (
          <Grid item xs={12} md={6} key={anime._id}>
            <Button
              variant="outlined"
              onClick={() => {
                logic.setSelectedAnime(anime._id);
              }}
            >
              <MovieIcon />
              {anime.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AnimeList;
