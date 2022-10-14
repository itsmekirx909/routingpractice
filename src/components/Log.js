import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";

export default function Log(){
const navigate = useNavigate()
let [user, setuser] = useState('')
let [btntog1, setbtntog1] = useState(0)
let [btntog2, setbtntog2] = useState(0)
let [check, setcheck] = useState(true)
let [pws, setpws] = useState('')
let [privcheck, setprivcheck] = useState(0)



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

setpws(e.target.value)    
    changes()
}

function changes(){
    let xc = (btntog1 + btntog2)
    if(xc === 2){
        setcheck(false)
    }else{
setcheck(true)
    }
}


function admincheck(){
    for(let i = 0; i<AdminUsers().length ; i++){

        if(user == AdminUsers()[i].username && pws == AdminUsers()[i].password){
            setprivcheck(++privcheck)
    break
        }
    }
}

function nextpage(){
    admincheck()

    if(btntog1 == 1 && btntog2 == 1){
navigate('/', {
    state: {
        username : user,
        checker: true,
        privilage: privcheck
    }
})
    }
    else{
        alert('Please Fill both fields')
    }


}


    return(
        <>
        <Button onClick={()=>{navigate('/')}} color='inherit'>Go Back To Home</Button>
                    <h3 className="hea">Login</h3>
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change1(x)}} className="inps" label="Enter Username" variant="outlined" />
                    <TextField InputLabelProps={{className: 'whitelabel'}} onChange={(x)=>{change2(x)}} type="password" className="inps" label="Enter Password" variant="outlined" />
            <Button disabled={check} onClick={nextpage} variant='contained' color="error" sx={{backgroundColor: 'red', color: 'white'}}>Login</Button>
        </>
    )
}