import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import {
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

const AnimeInfo = ({ logic }) => {
  if (logic.currentAnimeIsLoading) {
    return <ClipLoader color="red" loading={logic.mediaIsLoading} size={150} />;
  }
  if (logic.placesIsLoading) {
    return (
      <ClipLoader color="red" loading={logic.placesIsLoading} size={150} />
    );
  }
  const currentAnime = logic.currentAnime;
  const places = logic.relatedPlaces;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeaderCon>
          <CardHeader title={currentAnime.title} />
          <IconButton
            aria-label="add to favorites"
            onClick={() => logic.selectBookMark(currentAnime._id)}
          >
            <FavoriteIcon />
          </IconButton>
        </CardHeaderCon>
        <CardContent>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            removeArrowOnDeviceType={[
              "superLargeDesktop",
              "desktop",
              "tablet",
              "mobile"
            ]}
          >
            {currentAnime?.images.map((image) => (
              <CardMedia
                key={image._id}
                component="img"
                height="194"
                image={image.imageUrl}
                alt={image._id}
              />
            ))}
          </Carousel>
          <Typography variant="body2" color="text.secondary">
            {currentAnime.story}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardContent>
          <List sx={style} component="nav" aria-label="mailbox folders">
            {places.map((place) => (
              <div key={place.name}>
                <ListItem>
                  <ListItemText
                    secondary={place.name}
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    onClick={() => logic.selectDepartureArea(place)}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimeInfo;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CardHeaderCon = styled.div`
  display: flex;
`;

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper"
};
