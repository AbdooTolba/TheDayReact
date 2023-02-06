import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/TheDay/App";
import Keeper from "./Pages/Keeper/App";
import Subject from "./Pages/Subject/App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  <>
    <RouterProvider router={router} />
  </>,

  document.getElementById("root")
);
