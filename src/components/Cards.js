import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Cards() {

const hotels = [
    {
    id: 1,
    title: 'Saffron restaurant Regent plaza Hotel',
    location: 'Karachi',
    src: 'https://lh5.googleusercontent.com/p/AF1QipMdgu6q7UCZSVcixAx4D_OUuIXSdsGZms5Ue0ep=s120-w120-h120-p-n-k-no',
    price: '12,319 Rs',
    days: '2 Days',
    contactno: 'XXXX-XXXXXXX',
    rating: 3.9
},

{
    id: 2,
    title: 'Hotel Excelsior',
    location: 'Karachi',
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/304386879.jpg?k=22fa41a6324e35e13668ed5b8caa538985a01841c4fe756613a6e1c2ab4c0d27&o=&hp=1',
    price: '14,374 Rs',
    days: '2 Days',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.4
},

{
    id: 3,
    title: 'Hotel Crown Inn',
    location: 'Karachi',
    src: 'https://lh5.googleusercontent.com/p/AF1QipM5NgoN5RYphpixLz1xMrFMR2A7Px0p6awRdhU4=s120-w120-h120-p-n-k-no',
    price: '7,070 Rs',
    days: '2 Days',
    contactno: 'XXXX-XXXXXXX',
    rating: 3.7
},

{
    id: 4,
    title: 'Orchards Cottage hotel',
    location: 'Karachi',
    src: 'https://lh5.googleusercontent.com/p/AF1QipOh6fuxiJQpHxv2Xi-KX-an3fR8r24d4ct_acCF=s120-w120-h120-p-n-k-no',
    price: '12,977 Rs',
    days: '2 Days',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.3
},

{
    id: 5,
    title: 'Residency Hotel',
    location: 'Lahore',
    src: 'https://lh5.googleusercontent.com/p/AF1QipMckFQWXYn_pBQOXWrNp3NVY-ms_IJmb2MR7VSX=s120-w120-h120-p-n-k-no',
    price: '2,088 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.3
},

{
    id: 6,
    title: 'Marcopolo Hotel',
    location: 'Lahore',
    src: 'https://lh5.googleusercontent.com/p/AF1QipM663r45aTYSqO63ulDrG-OhtiHIJqDTptoIgFz=s120-w120-h120-p-n-k-no',
    price: '4,558 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 3.9
},

{
    id: 7,
    title: 'Lotus Hotel',
    location: 'Lahore',
    src: 'https://lh5.googleusercontent.com/p/AF1QipMkK3HUcDEgC6HRLUR7nQwisvIlP1ALGL5yluKD=s120-w120-h120-p-n-k-no',
    price: '3,248 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.0
},

{
    id: 8,
    title: 'Pakeeza One Hotel',
    location: 'Lahore',
    src: 'https://lh5.googleusercontent.com/p/AF1QipMv0RBACLb1UQkPuUMstQ3lTvC669OcI-xVjl3C=s120-w120-h120-p-n-k-no',
    price: '2,999 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.4
},

{
    id: 9,
    title: 'Hotel Red Line',
    location: 'Islamabad',
    src: 'https://lh5.googleusercontent.com/p/AF1QipNbMgA7Wd_uXuLdrmPVnmqzQw2oGO9xfGMsI9Cj=s120-w120-h120-p-n-k-no',
    price: '5,279 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.0
},

{
    id: 10,
    title: 'Al-Sakhawat Hotel',
    location: 'Islamabad',
    src: 'https://lh5.googleusercontent.com/p/AF1QipPQ-wYWKLh_us-N9lZa9kRAnUw27FdhAlX_6-Hl=s120-w120-h120-p-n-k-no',
    price: '2,005 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 3.6
},

{
    id: 11,
    title: 'Serena Hotel',
    location: 'Islamabad',
    src: 'https://lh5.googleusercontent.com/p/AF1QipOYaVb35jURKF8KuH61Jnz9bCxd9JuTgA3SpLb9=s120-w120-h120-p-n-k-no',
    price: '62,238 Rs',
    days: '1 Month',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.6
},

{
    id: 12,
    title: 'Mulberry Guest House',
    location: 'Islamabad',
    src: 'https://lh5.googleusercontent.com/p/AF1QipNm1UsKkAHQ5wjFee2tYMfTSynIahpADeH1Asry=s120-w120-h120-p-n-k-no',
    price: '4,333 Rs',
    days: '1 Day',
    contactno: 'XXXX-XXXXXXX',
    rating: 4.4
}
]

let [hov, sethov] = useState(false)
let [loader,setloader] = useState(<CircularProgress color='inherit'/>)
let [loadercheck, setloadercheck] = useState(true)


setTimeout(()=>{
    setloadercheck(false)
}, 2000)

  return (
    <div>
{loadercheck ?

<div>{loader}</div>

: 
<Grid container sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
        {
hotels.map((e,i)=>{
    return(
        <Card onMouseEnter={()=>{sethov(true)}} onMouseLeave={()=>{sethov(false)}} className='hove' key={e.id} sx={{maxWidth: 345, zIndex: 1, height: 250, width: 250, margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <CardMedia
        component="img"
        height="140"
        image={e.src}
        alt="Hotel"
        sx={{height: 100, width: 100, margin: '0px auto'}}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
Location: {e.location}
        </Typography>
        </CardContent>

        <Typography sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} gutterBottom variant="p" component="div">
        Rating: <Rating name="read-only" precision={0.1} value={e.rating} readOnly />

        </Typography>
        </Card>
        )
    })}
    </Grid>
}
        </div>

  );
}
