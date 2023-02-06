import * as React from "react";
import Header from "./Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import data from "../Data/data.json";
import Dialog from "./Dialog";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [search, setSearch] = React.useState("");

  // let d = JSON.parse(JSON.stringify(data));
  // console.log(d[0].subjects.map((data) => (data.name)));

  // console.log(d.semesters.map((d,index) => (d.subjects)));

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header value={search} setSearch={setSearch} />

        <Box sx={{ m: 2 }}>
          <Grid container spacing={2}>
            {/*Filter for search
        1-Semesters
        2-Subjects
        3-doctors
        4-name
        5-Appreviation
        .filter?
      */}
            {data.semesters
              .filter(
                (x) =>
                  x.subjects.filter(
                    (y) =>
                      y.name.includes(search) ||
                      y.appreviation.includes(search) ||
                      y.doctor.includes(search)
                  ).length > 0
              )
              .map((item) => (
                <Grid item xs={4}>
                  <Item>
                    <Typography sx={{ marginBottom: 3 }}>
                      Semester {item.index}
                    </Typography>
                    <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                      {item.subjects
                        .filter(
                          (y) =>
                            y.name.includes(search) ||
                            y.appreviation.includes(search) ||
                            y.doctor.includes(search)
                        )
                        .map((subjects) => (
                          <Grid item>
                            <Dialog
                              label={subjects.appreviation}
                              subjects={subjects}
                            />
                          </Grid>
                        ))}
                    </Grid>
                  </Item>
                </Grid>
              ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
