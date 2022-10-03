
import {Box} from '@mui/material';



const About=()=>{

    return(
        <Box sx={{minHeight:'100vh',backgroundColor:'black',color:'white',width:'100%',display:'flex'
            ,justifyContent:'flex-start', flexDirection:'column',
            alignItems:'center'
        }}>
            <Box sx={{pt:10,textAlign:"center"}}>
                <h2>About</h2>         
            </Box>
            <Box sx={{mt:5,border:"4px solid white"
                ,width:"80%"
                ,height:"max-content",

                borderRadius:"10px",textAlign:"center"
            }}>
           
                <h3>About This Project</h3>
                <p>This project aims to learn about the <span style={{color:"blue"}}>React.js</span> Projects</p>
                <p>Source API : <span className='tmdb' style={{color:"blue"}} onClick={()=>{window.open('https://developers.themoviedb.org/3','_blank', 'noopener,noreferrer')}}>TMDB</span></p>
            
            </Box>
          

        </Box>
    )
}
export default About;