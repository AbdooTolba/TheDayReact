import { Box, Paper, Typography } from "@mui/material";

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
      {/* sections of weeks which every week is a div that can be slided horizontally with overflow-x */}

      {["Lectures", "Sections", "Whitenning"].map((item, index) => (
        <>
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            {item}
          </Typography>
          <Box
            sx={{
              height: "30vh",
              width: "70vw",
              display: "flex",
              overflow: "auto",
              whiteSpace: "nowrap",
              gap: "2rem",
            }}
          >
            {[
              1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
            ].map((x) => (
              <>
                <Box>
                  <Typography variant="h6">Title</Typography>
                  <Paper
                    elevation={500}
                    sx={{
                      cursor: "pointer",
                      p: 4,
                      m: 1,
                      ml: 0,
                      height: "70%",
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
              </>
            ))}
          </Box>
        </>
      ))}
    </>
  );
}

export default Material;
