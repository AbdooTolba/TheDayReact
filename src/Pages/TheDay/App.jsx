import React, { Suspense, lazy, useState, useEffect, forwardRef } from "react";
import Header from "../../components/Header";
import CurretnSemester from "./CurretnSemester";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";
import { Paper, Box } from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Main = lazy(() => import("./Main"));

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [curretnSemester, setCurretnSemester] = useState(-1);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [upTo, setUpTo] = useState(0);

  const handleClick = () => {
    setOpen(true);

    setCurretnSemester(-1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const semester = JSON.parse(localStorage.getItem("semester"));

    if (semester) {
      setCurretnSemester(semester);
      setUpTo(semester);
    }
  }, [curretnSemester]);

  useEffect(() => {
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
        {" "}
        {curretnSemester !== -1 && (
          <>
            <CurretnSemester
              curretnSemester={curretnSemester}
              setCurretnSemester={setCurretnSemester}
              handleClick={handleClick}
              setOpen={setOpen}
            />
          </>
        )}
        <Paper
          sx={{
            width: "100%",

            maxWidth: { sm: "80%", xs: "100%" },
            position: "relative",
            pb: 50,
          }}
        >
          <Suspense
            fallback={
              <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            }
          >
            <Main search={search} curretnSemester={curretnSemester} />
          </Suspense>
        </Paper>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Up to semester {<span style={{ fontWeight: "800" }}>{upTo + 1}</span>}{" "}
          🌟🤠
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
