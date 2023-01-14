import React, { useEffect, useState } from "react";
import useFindMe from "../../servicies/find-me";
import Header from "../../components/header";
import useLogic from "./use-logic";
import ClipLoader from "react-spinners/ClipLoader";

import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const MyPage = () => {
  const logic = useLogic();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (!logic.isLoading) {
    <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  return (
    <div>
      <CssBaseline />

      <Header />
      <Container>
        <Card maxWidth="ms" container>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <Tooltip title="유저 정보 변경">
                <IconButton aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
            }
            title={`User Name: ${logic.user.firstName} ${logic.user.lastName}`}
            subheader={`E-mail: ${logic.user.email}`}
          />
        </Card>
      </Container>
    </div>
  );
};

export default MyPage;
