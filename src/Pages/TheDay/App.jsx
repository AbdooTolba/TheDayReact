import * as React from "react";
import Header from "../../components/Header";
import Main from "./Main";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
        <Main search={search} />
      </ThemeProvider>
    </>
  );
}

export default App;
