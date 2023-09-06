import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
// import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Venues from './Components/Pages/Venues';
import Stories from './Components/Pages/Stories';
import Events from './Components/Pages/Events';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/venues",
    element: <Venues />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/stories",
    element: <Stories />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
