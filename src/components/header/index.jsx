import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import useFindMe from "../../servicies/find-me";
import useHandleErrorAsync from "../../servicies/handle-error-async";
import useLogout from "../../servicies/logout";
import NotLoggedInError from "../../errors/not-logged-in";

const memberSetting = ["Profile", "MyPage", "Logout"];
const Header = () => {
  const navigate = useNavigate();
  const findMe = useFindMe();
  const logout = useLogout();
  const handleErrorAsync = useHandleErrorAsync();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const init = async () => {
    try {
      await findMe();
      setIsLoggedIn(true);
    } catch (error) {
      if (error instanceof NotLoggedInError) {
        setIsLoggedIn(false);
        return;
      }

      throw error;
    }
  };
  useEffect(() => {
    init();
  }, []);
  useEffect(() => {
    init();
  }, [isLoggedIn]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = handleErrorAsync(async () => {
    await logout();
    window.alert("로그아웃되었습니다.");
    init();
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonSharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            JapanTravel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <CatchingPokemonSharpIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            JapanTravel
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isLoggedIn === false && (
                <div>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`/sign-in`)}
                    style={{ cursor: "pointer" }}
                  >
                    Sign In
                  </Typography>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`/sign-up`)}
                    style={{ cursor: "pointer" }}
                  >
                    Sign Up
                  </Typography>
                </div>
              )}

              {isLoggedIn === true && (
                <div>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`/my-page`)}
                    style={{ cursor: "pointer" }}
                  >
                    My Page
                  </Typography>
                  <Typography
                    textAlign="center"
                    onClick={onLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </Typography>
                </div>
              )}

              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </Typography>
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
