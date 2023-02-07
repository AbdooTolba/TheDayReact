import { Box, Paper, Typography, Grid } from "@mui/material";
import "./Material.css";

function Material({
  name,
  appreviation,
  doctor,
  material,
  PreviousExams,
  schdule,
  description,
}) {
  return (
    <>
      {["Lectures", "Sections", "Whitenning"].map((item, index) => (
        <Paper sx={{}}>
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            {item}
          </Typography>
          <Box
            className="material__section"
            key={index}
            sx={{
              width: "70vw",
              height: "70vh",
              maxHeight: "70vh",
              display: "grid",
              overflowY: "scroll",
              p: 2,
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: ".2rem",
            }}
          >
            {[
              1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
            ].map((x) => (
              <Box>
                <Typography variant="h6">Title</Typography>
                <Paper
                  elevation={20}
                  sx={{
                    flexBasis: "50%",
                    cursor: "pointer",
                    p: 4,
                    m: 1,
                    ml: 0,
                    height: "25vh",
                    minWidth: "10%",
                    userSelect: "none",
                    textAlign: "center",
                  }}
                >
                  {x === 1 ? (
                    <Typography variant="h5">PDF</Typography>
                  ) : (
                    <Typography variant="h5">IMG</Typography>
                  )}
                </Paper>
              </Box>
            ))}
          </Box>
        </Paper>
      ))}
    </>
  );
}

export default Material;
