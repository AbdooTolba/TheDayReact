import React, { useEffect } from "react";
import Header from "../../components/Header";

import { useState } from "react";
import { CssBaseline, Paper, Box } from "@mui/material";
import Main from "./Main.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <CssBaseline />
      <Header
        title="Keeper"
        setSearch={setSearch}
        search={search}
        isSearch={true}
      />
      <Box
        sx={{
          m: 2,
        }}
      >
        <Main search={search} />
      </Box>
    </>
  );
};

export default App;
