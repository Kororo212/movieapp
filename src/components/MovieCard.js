import React,{useState} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import Loading from './Loading';


export default function MovieCard({movie}) {
let navigate = useNavigate();
const toDetail = (data)=>{
  navigate(`/detail/${data}`)
  window.scrollTo(0,0)
}

const [load,setLoad] =useState(false)

const onLoading = async()=>{
  setLoad(true)
}

const BaseImageUrl = "https://image.tmdb.org/t/p/original";

  return (
    
    <Card id={movie.id} 
       sx={{backgroundColor:'black'
            ,color:'white',display: 'flex',
             marginTop:8,width:350, mb:5,
             boxShadow:'5px 5px 10px white',
             
          
            }} 
       onClick={()=>{toDetail(movie.id)}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
           
           
            
              {!load && <Loading />}
                 
                <CardMedia
                  component="img"
                  sx={{ width: 150,height:225 }}
                  image= {`${BaseImageUrl}${movie.poster_path}`||`${BaseImageUrl}${movie.backdrop_path}`}
                  alt="Poster_Movie"
                  className="test"
                  onLoad={()=>{onLoading()}}
                />
          
            
            
        </CardContent>
      </Box>
        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 1,flexDirection:'column',justifyContent:'center' }}>
            <Typography component="div" variant="h6" >
             {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
             {new Date(movie.release_date).getFullYear()}
            </Typography>
            <Rating name="read-only" precision={0.1} value={movie.vote_average/2} readOnly />
        <Box >{movie?.vote_average.toFixed(2)}</Box>
       
        </Box>
    </Card>
  );
}
