import { MovieFilter} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogUser from './LogUser';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  {text:'Indonesian Movie',link:'/indonesia'}
, {text:'Pricing', link:'/price'}
, {text:'About',link:'/about'},

];


const Navbar = () => {

  const [showBar,setShowBar] = useState(false)
  window.addEventListener('scroll',()=>{
  
    if(window.scrollY > 50){
      document.getElementById("navbar").style.backgroundColor="black"
    }else{
      document.getElementById("navbar").style.backgroundColor="hsla(0, 0%, 0%, 0)"
    }
  })
  const actionBar = ()=>{
    setShowBar(state=>state=!state)
    
  }
  const navAction = ()=>{
    setShowBar(false)
    window.scrollTo(0,0)
  }
  return (
    <Box sx={{ display: 'flex',justifyContent:'center'}}>
      <AppBar component="nav" id="navbar" sx={{backgroundColor:' hsla(0, 0%, 0%, 0)',boxShadow:'none'}}>
        <Toolbar>
          <svg width={0} height={0}>
              <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                <stop offset={0} stopColor="rgba(241,184,74,1)" />
                <stop offset={1} stopColor="rgba(207,113,8,1)" />
              </linearGradient>
           </svg>
          <MovieFilter sx={{fill: "url(#linearColors)"
          
          
        
        }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              padding:'4px'
            }}
          >
            <Link style={{color:'white',

            background: 'rgb(51,29,173)',
            background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:'transparent',
            fontSize:'25px'
          }} 
            
            
            
            onClick={()=>{navAction()}} to='/'>
              NONTON
            </Link>
          </Typography>
          <Box className="bar-action"  sx={{ }}>
              {navItems.map((item,i)=>(
                <NavLink key={i} style={{margin:"10px",color:'white'}}
                  to={item.link}
                  onClick={()=>{navAction()}}
                className={({isActive})=> isActive ? 'nav-active': 'nav-inactive'}
                >
                  {item.text}
                </NavLink>
              ))}
          </Box>
          
            <Box id ="action-bar" sx={{left:showBar? '50%':'250%'}}>
              {navItems.map((item,i)=>(
                <NavLink key={i} style={{margin:"10px",color:'white'}}
                  to={item.link}
                  onClick={()=>{navAction()}}
                className={({isActive})=> isActive ? 'nav-active': 'nav-inactive'}
                >
                  {item.text}
                </NavLink>
              ))}
          </Box>
          <MenuIcon onClick={()=>{actionBar()}}/>
          <Box style={{padding:'3px',margin:'1px'}}>
            <LogUser />
          </Box>
         
        </Toolbar>
      </AppBar>
     
 
    </Box>
  );
}

export default Navbar;