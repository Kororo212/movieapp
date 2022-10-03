import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate} from 'react-router-dom';
import { Paper, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { useTrendingMovieDayQuery } from '../Features/MoviApi';
import MovieCard from './MovieCard';


export default function TopList({}) {


const {data,isLoading,error} = useTrendingMovieDayQuery()



const BaseImageUrl = "https://image.tmdb.org/t/p/original";

  return (
       <Box style={{minHeight:'150px'}}>
        <Carousel sx={{color:'white'}}>
            {
                data?.results.map( (item, i) =>(
                
           
                <Box key ={item.id} sx={{minHeight:'400px',minWidht:'100%',padding:'100px 10px 10px 10px',
                  background:`url(${BaseImageUrl}${item.backdrop_path})`,
                  backgroundPosition:'50% 50%',
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat'
                  
                }}>
                  <h1 style={{color:'white'}}>{item.title}</h1>
                   <Box style={{width:'80%'}}>
                     <MovieCard movie={item}/>
                   </Box>
                   
                </Box>
                  
                  
                  )
                
                )
            }
        </Carousel>
      </Box>
    
  );
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}