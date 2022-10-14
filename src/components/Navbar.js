import React from "react";
import HouseIcon from '@mui/icons-material/House';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()

    return(
        <div className="navbar">

        <Tooltip onClick={()=>{navigate('/')}} title='Hotels' placement="bottom" sx={{cursor: 'pointer', margin: '0px 10px'}}>
        <HouseIcon sx={{cursor: 'pointer', border: '2px solid black', padding: '4px', borderRadius: '100%' ,color: 'black', fontSize: '40px', margin: '0px 10px'}}/>
        </Tooltip>

        <Typography onClick={()=>{navigate('/book')}} variant='h5' sx={{ cursor: 'pointer', margin: '0px 10px'}}>Booking</Typography>

        <Typography onClick={()=>{navigate('/contact')}} variant='h5' sx={{ cursor: 'pointer'}}>Contact</Typography>

        </div>
    )
}