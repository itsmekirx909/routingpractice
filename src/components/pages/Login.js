import React, { useState } from "react";
import Log from "../Log";
import Sign from "../Sign";

export default function Login(){
   let [checker, setchecker] = useState(true)
    return(
        <div className='body'>
        <div className="logsig">
            {checker?
            <>
<Log/>
<div>Not a member yet? <span className="sign" onClick={()=>{setchecker(false)}}>Sign Up</span></div>
            </>
        :
        <>
<Sign/>
<div>Have an account? <span className="sign" onClick={()=>{setchecker(true)}}>Sign in</span></div>
        </>
            }
        </div>
        </div>
    )
}