import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexPage from "./routes";
import { store } from "./services/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
