import React from 'react';
import {Box} from '@mui/material';
import { useParams } from 'react-router-dom';
import {auth} from '../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Subscribe =()=>{
    let params = useParams();
    const [user] = useAuthState(auth);
    
  
    return (
        <Box className='subs' sx={{backgroundColor:'black',mt:10, display:"flex",minHeight:'80vh',color:'white'}}>
            <h1>Thank you for subscribe {user.email}</h1>
            <h2>type : {params?.type}</h2>
        </Box>
    )
}
export default Subscribe;
