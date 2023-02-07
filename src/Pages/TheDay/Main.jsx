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
      <Typography variant="h1" sx={{ mt: 30, textAlign: "center" }}>
        {"Not Yet :)"}
      </Typography>
    </>
  );
}

export default Main;
