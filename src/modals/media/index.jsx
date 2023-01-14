import React, { useState } from "react";
import Modal from "react-modal";

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
  Tooltip
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MediaInfo = ({ place }) => {
  if (place == null) {
    return null;
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
            alignContent: "center"
          }}
        >
          {place.animeImages.map((image) => (
            <CardMedia
              key={image._id}
              component="img"
              src={image.url}
              alt={image._id}
              sx={style}
            />
          ))}

          {/* <StyledSlider {...settings}>
            {place.locationImages.map((image) => (
              <CardBox key={image._id}>
                <CardImg src={image.url} alt={image._id} />
              </CardBox>
            ))}
          </StyledSlider> */}
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
  currentMedia,
  selectBookMark,
  place
}) => {
  const logic = useLogic();
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <MediaInfo place={place} />
    </Modal>
  );
};

export default MediaModal;

// const settings = {
//   dots: false,
//   isFinite: true,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 1,
//   slidedsToScroll: 1,
//   centerMode: true,
//   centerPadding: "0px"
// };

// const StyledSlider = styled(Slider)`
//   .slick-list {
//     width: 100%;
//     margin: 0 auto;
//   }
//   .slice-slide div {
//     cursor: pointer;
//   }

// `;
// const CardBox = styled.div`
//   cursor: pointer;
//   width: 500px;
//   height: 250px;
// `;
// const CardImg = styled.img`
//   width: 100%;
//   height: 250px;
//   max-width: 500px;
// `;
const style = {
  width: "100%",
  height: "250px",
  maxWidth: 500,
  bgcolor: "background.paper"
};
