import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import tmdb from '../assets/tmdb.png'
const Footer = ()=>{
    return(
        <Box sx={{minWidth:'100%',backgroundColor:'black',
        height:'max-content',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderTop:'3px solid white',
        color:'white',
        flexDirection:'column',
        width:'100%'
        }}>
            <Box style={{color:'white',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            padding:'20px 10px 10px 10px',
            width:'80%'
            }}>
                <InstagramIcon sx={{width:'25px',height:'25px',
 
            
                    }}/>
                <FacebookIcon sx={{width:'25px',height:'25px'}}/>
                <img style={{width:'25px',height:'25px'}} src={tmdb}/>
            </Box>
            <Box style={{display:'flex',width:'95%',
                alignItems:'center',
                justifyContent:'space-around',
                textDecoration:'none',
                color:'white'
                }}>
                <a href="/"
                    
                  >Home
                </a>
                <p>|</p>
                <a href="/indonesia">
                    Indonesian Movies
                </a>
                <p>|</p>
                <a href="/price">
                    Price
                </a>
                <p>|</p>
                <a href="/about">
                    About
                </a>
                
            </Box>
            <Box >
             <h3>Copyright © 2022</h3>
            </Box>
            
        </Box>
    )
}
export default Footer