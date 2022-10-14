import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function Sign(){
const navigate = useNavigate()
let [user, setuser] = useState('')
let [btntog1, setbtntog1] = useState(0)
let [btntog2, setbtntog2] = useState(0)
let [btntog3, setbtntog3] = useState(0)
let [btntog4, setbtntog4] = useState(0)
let [check, setcheck] = useState(true)
let [pw1, setpw1] = useState('')
let [pw2, setpw2] = useState('')



function change1(e){
if(e.target.value !== ''){
    setbtntog1(1)
}
else{
    setbtntog1(0)
}

setuser(e.target.value)

changes()

}

function change2(e){
    if(e.target.value !== ''){
    setbtntog2(1)
    }else{
        setbtntog1(0)
    }

    changes()
}

function change3(e){
    if(e.target.value !== ''){
    setbtntog3(1)
    }else{
        setbtntog3(0)
    }

    setpw1(e.target.value)
    changes()
}

function change4(e){
    if(e.target.value !== ''){
    setbtntog4(1)
    }else{
        setbtntog4(0)
    }

    setpw2(e.target.value)
    changes()
}

function changes(){
    let xc = (btntog1 + btntog2 + btntog3 + btntog4)
    if(xc === 4){
        setcheck(false)
    }else{
setcheck(true)
    }
}

function nextpage(){
    if(btntog1 == 1 && btntog2 == 1 && btntog3 == 1 && btntog4 == 1 && pw1 == pw2){
navigate('/', {
    state: {
        username : user,
        checker: true
    }
})
    }
    else{
        alert('Please Fill Every Field And Check Passwords')
    }
}


    return(
        <>
        <Button onClick={()=>{navigate('/')}} color='inherit'>Go Back To Home</Button>
                    <h3 className="hea">Sign Up</h3>
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change1(x)}} className="inps" label="Enter Email" variant="outlined" />
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change2(x)}} className="inps" label="Enter Username" variant="outlined" />
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change3(x)}} type="password" className="inps" label="Enter Password" variant="outlined" />
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change4(x)}} type="password" className="inps" label="Enter Password" variant="outlined" />
            <Button disabled={check} onClick={nextpage} variant='contained' color="error" sx={{backgroundColor: 'red', color: 'white'}}>Sign Up</Button>
        </>
    )
}