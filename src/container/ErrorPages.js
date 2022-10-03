import { Box } from '@mui/material';
import React from 'react';

const ErrorPages = () => {
    return (
        <Box sx={{minWidth:'100%',minHeight:'100vh',}}>
            <Box sx={{width:'100%',display:'flex',justifyContent:'center',
               flexDirection:'column',
                color:'white',
                padding:'100px 40px'
                }}>
               <h1 style={{color:'red'}}>PAGE ERROR</h1>
               <p>Sorry, something wrong....</p>
               <a style={{textDecoration:'none',color:'white',borderBottom:'2px solid white',width:'max-content'}} href='/'>Go to Home</a>
            </Box>
        </Box>
    );
}

export default ErrorPages;
