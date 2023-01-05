import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './react_components/error_page';
import Departures, { loader as depaturesLoader} from './react_components/Departures';
import Arrivals, {loader as arrivalsLoader} from './react_components/Arrivals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/depatures/:icao",
    element: <Departures/>,
    loader: depaturesLoader,
  },
  {
    path: "/arrivals/:icao",
    element: <Arrivals />,
    loader: arrivalsLoader
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);