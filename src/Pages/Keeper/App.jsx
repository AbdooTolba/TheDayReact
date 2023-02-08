import React, { useEffect } from "react";
import Header from "../../components/Header";

import { useState } from "react";
import { CssBaseline, Paper, Box } from "@mui/material";
import Main from "./Main.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Keeper";
    document.getElementById("favicon").href =
      "https://media.discordapp.net/attachments/1008571067398369291/1072747425141366804/Hotpot_3.png?width=238&height=238";
  }, []);

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
