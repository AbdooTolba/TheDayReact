import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import { Link as LinkMUI } from "@mui/material";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({ search, setSearch, title, isSearch }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: { sm: "5rem", xs: "4rem" },

          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: "block",
              fontSize: { sm: "1.5rem", xs: "1.5rem" },
            }}
          >
            {title}
          </Typography>

          {/* <LinkMUI 
              component={
                RouterLink  
              } to={`/Keeper`}
               >
              Go To Keeper
          </LinkMUI> */}
          {/* 2 icons first for theday route and the other for Keeper route */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            component={RouterLink}
            to={`/`}
          >
            <CrisisAlertIcon
              sx={{
                p: {
                  xs: 0,
                },
                m: {
                  xs: 0,
                },
                height: {
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                width: "auto",
              }}
            />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            component={RouterLink}
            to={`/keeper`}
          >
            <SpeakerNotesIcon
              sx={{
                p: {
                  xs: 0,
                },
                m: {
                  xs: 0,
                },
                height: {
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                width: "auto",
              }}
            />
          </IconButton>
          {isSearch && (
            <Search
              sx={{
                p: {
                  xs: 0,
                },
                ml: {
                  sm: "auto",
                  xs: "0",
                },
                height: {
                  sm: "2.5rem",
                  xs: "2.5rem",
                },
                width: {
                  xs: "10rem",
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
