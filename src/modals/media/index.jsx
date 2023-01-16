import React, { useState } from "react";
import Modal from "react-modal";
import Carousel from "react-multi-carousel";
import ClipLoader from "react-spinners/ClipLoader";

import useLogic from "./use-logic";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
  IconButton,
  Collapse,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MediaInfo = ({ place, selectBookMark, relatedPlace,relatedPlaceLoading }) => {
  console.log(relatedPlace)
  if (place == null) {
    return null;
  }
  if (relatedPlaceLoading) {
    return <ClipLoader color="red" loading={relatedPlaceLoading} size={150} />;
  }
  return (
    <div>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader subheader={place.name} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "col",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {place.locationImages.map((image) => (
            <CardMedia
              key={image._id}
              component="img"
              src={image.url}
              alt={image._id}
              sx={style}
            />
          ))}

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
              "mobile",
            ]}
          >
            {relatedPlace.relatedAnimeImage.map((image, i) => (
              <CardMedia
              key={i}
              component="img"
              height="194"
              image={image.url}
              alt={image.url}
              />
            ))}
          </Carousel>

    
        </Box>
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            // onClick={() => selectBookMark(currentMedia)}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

const MediaModal = ({
  isOpen,
  onRequestClose,
  selectBookMark,
  place,
  relatedPlace,
  relatedPlaceLoading
}) => {
  const logic = useLogic();
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <MediaInfo
        relatedPlace={relatedPlace}
        place={place}
        selectBookMark={selectBookMark}
        relatedPlaceLoading={relatedPlaceLoading}
      />
    </Modal>
  );
};

export default MediaModal;

const style = {
  width: "100%",
  height: "250px",
  maxWidth: 500,
  bgcolor: "background.paper",
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
