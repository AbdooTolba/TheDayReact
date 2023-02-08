import React, { Suspense, lazy } from "react";
import Header from "../../components/Header";

import CssBaseline from "@mui/material/CssBaseline";
import { Paper, Box } from "@mui/material";

const Main = lazy(() => import("./Main"));

function App() {
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    document.title = "TheDay";
    document.getElementById("favicon").href =
      "https://media.discordapp.net/attachments/1008571067398369291/1072747224586522714/Hotpot_1_2.png?width=270&height=270";
  }, []);

  return (
    <>
      <CssBaseline />
      <Header
        title="TheDay"
        value={search}
        setSearch={setSearch}
        isSearch={true}
      />
      <Box
        sx={{
          mt: { sm: "2%", xs: "10%" },
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
            width: "100%",

            maxWidth: { sm: "80%", xs: "100%" },
            position: "relative",
            pb: 50,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Main search={search} />
          </Suspense>
        </Paper>
      </Box>
    </>
  );
}

export default App;
