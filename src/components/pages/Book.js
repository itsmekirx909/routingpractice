import React from "react";
import Navbar from "../Navbar";
import Cards from "../Cards";


export default function Book(){
    return(
        <div>
            <Navbar/>

            <div className="bods">
            <h1>Available Hotels</h1>

<Cards/>
            </div>

        </div>
    )
}