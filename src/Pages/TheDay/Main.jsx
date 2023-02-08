import Box from "@mui/material/Box";
import data from "../../Data/data.json";
import Grid from "@mui/material/Grid";
import Dialog from "./Dialog";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MainPc from "./MainPc";
import MainPhone from "./MainPhone";

function Main({ search }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <MainPc search={search} />
      <MainPhone search={search} />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ mt: 30, textAlign: "center" }}>
          {"Coming Soon "}
        </Typography>
        <img
          src="https://camo.githubusercontent.com/cc4b7d9efe6dea4ddaf02677caf064823952913af5e10c82b47fc47bab499e4b/68747470733a2f2f6d656469612e74656e6f722e636f6d2f593562647a6a457663464941414141692f6b697474792d63686173652d706978656c2e676966"
          alt="Coming Soon"
        />
      </Box>
    </>
  );
}

export default Main;
