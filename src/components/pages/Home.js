import { Button } from "@mui/material";
import React from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Admins from "./dashboards/Admins";
import Users from "./dashboards/Users";


export default function Home(){
    
    let location = useLocation()
    let navigate = useNavigate()
    
function dash(e){
  navigate( e.target.value ,{
    state: {
        username : location.state.username,
        checker: true,
        privilage: location.state.privilage
    }})
}


    return(

        <div className="navhome">
            <Navbar/>

<div className="bg">
            {location.state && location.state.username ?
            <>
            <h1>Welcome {location.state.username}</h1>
            {location.state && location.state.privilage ?
<Button value='/admins' onClick={(x)=>dash(x)} color="secondary" variant="contained">Add Changes</Button>
            :
            <>
<Button value='/users' onClick={(x)=>dash(x)} color="secondary" variant="contained">Your Bookings</Button>
            </>
             }  
            </>

     
            :
            <>
             <h1>Book Hotels Now In Less Prize</h1>
             <Button onClick={()=>{navigate('/login')}} color="secondary" variant="contained">Login</Button>
            </>
             }



<Routes>




    <Route path="Admins" element={<Admins/>}/>
    <Route path="Users"element={<Users/>} />
</Routes>

</div>






        </div>
    )
}