import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Keeper from "./Pages/Keeper/App";

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
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  document.getElementById("root")
);
