import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/TheDay/App";
import Keeper from "./Pages/Keeper/App";
import Subject from "./Pages/Subject/App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/keeper",
    element: <Keeper />,
  },
  {
    path: "/subject/:subjectID",
    element: <Subject />,
  },
]);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,

  document.getElementById("root")
);
