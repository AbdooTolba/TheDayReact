import React, { useEffect } from "react";
import Header from "../../components/Header";

import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper, Box } from "@mui/material";
import Main from "./Main.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Keeper" setSearch={setSearch} search={search} />
      <Box
        sx={{
          m: 2,
        }}
      >
        <Main search={search} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
