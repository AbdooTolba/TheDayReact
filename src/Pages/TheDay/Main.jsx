import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import data from "../../Data/data.json";
import Dialog from "./Dialog";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Main({ search }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
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
                  y.name.toLowerCase().includes(search.toLowerCase()) ||
                  y.appreviation.toLowerCase().includes(search.toLowerCase()) ||
                  y.doctor.toLowerCase().includes(search.toLowerCase())
              ).length > 0
          )
          .map((item) => (
            <Grid item xs={4}>
              <Item
                sx={{
                  minHeight: "100%",
                }}
              >
                <Typography sx={{ marginBottom: 3 }}>
                  Semester {item.index}
                </Typography>
                <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                  {item.subjects
                    .filter(
                      (y) =>
                        y.name.toLowerCase().includes(search.toLowerCase()) ||
                        y.appreviation
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        y.doctor.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((subjects) => (
                      <Grid item>
                        <Dialog
                          label={subjects.appreviation}
                          subject={subjects}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Item>
            </Grid>
          ))}
      </Grid>
      <br />
      <Typography variant="h1" sx={{ mt: 30, textAlign: "center" }}>
        {"Not Yet :)"}
      </Typography>
    </Box>
  );
}

export default Main;
