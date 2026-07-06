import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'remixicon/fonts/remixicon.css'
import PreLoader from './components/common/PreLoader'
import { BrowserRouter } from "react-router-dom";

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AppRoutes from "./routes/AppRoutes"
// .. 
AOS.init();


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PreLoader/>
  </BrowserRouter>
);

