import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Navbar";

export default function Contact() {
    let [checker, setchecker] = useState(false)
    return (
        <div>
            <Navbar />
            {checker ?
                <div className="bods">
                    <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    </div>
                    <h1>Your Message Has Been Submitted</h1>
                    <h4>We will respond to you shortly</h4>
                </div> :

                <div className="bods">
                    <h1>Contact Us</h1>

                    <TextField label='Enter Email' className="inps" />

                    <TextField label='Send Message' className="inps2" multiline rows={5} />

                    <Button variant="contained" onClick={()=>{setchecker(true)}} color="success">Send</Button>

                </div>
            }
        </div>
    )
}