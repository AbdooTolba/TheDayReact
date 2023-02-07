import Box from "@mui/material/Box";
import data from "../../Data/data.json";
import Grid from "@mui/material/Grid";
import Dialog from "./Dialog";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Mainpc({ search }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        m: 2,
        display: {
          sm: "none",
          xs: "block",
        },
      }}
    >
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
        .map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 3,
              borderBottom: "1px solid #1e1e1e",
              //   shadow
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Semester {item.index}</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
}

export default Mainpc;
