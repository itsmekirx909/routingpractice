import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Book from "../pages/Book";
import Login from "../pages/Login";
import HouseIcon from '@mui/icons-material/House';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from "@mui/material";



export default function Routing(){
    return(
        <Router>
                <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Book" element={<Book/>}/>
            <Route path="Login" element={<Login/>}/>
                </Routes>
        </Router>
    )
}