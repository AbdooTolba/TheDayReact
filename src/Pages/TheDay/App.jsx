import * as React from "react";
import Header from "../../components/Header";
import Main from "./Main";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper, Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header
          title="TheDay"
          value={search}
          setSearch={setSearch}
          isSearch={true}
        />
        <Box
          sx={{
            mt: "5%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Paper
            sx={{
              // center it
              margin: "auto",

              width: "100%",

              maxWidth: { sm: "80%", xs: "100%" },
              position: "relative",
              pb: 50,
            }}
          >
            <Main search={search} />
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
