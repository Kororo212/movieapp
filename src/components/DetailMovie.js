import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import CardMedia from "@mui/material/CardMedia";
import {Button} from "@mui/material";
import { useGetDetailMovieMutation } from "../Features/MoviApi";
import Loading from "./Loading";




const DetailMovie = ()=>{
let params = useParams();
const YT = 'https://www.youtube.com/embed/';
const URL = "https://api.themoviedb.org/3/movie/";
const KEY = "?api_key=844c872feee1c2892d10199ce6c7fa4d";
const BaseImageUrl = "https://image.tmdb.org/t/p/original";
const Detail = "&append_to_response=videos";
const [movie,setMovie] = useState([]);
const [genres,setGenres] = useState([]);
const [loading,setLoading] = useState(true);
const [trailer,setTrailer] = useState([]);
const [backdrop,setBackdrop] = useState();


const [getDetailMovie,{isLoading,error,data}] = useGetDetailMovieMutation()

useEffect(()=>{
    getDetailMovie(params?.data)
},[params])
console.log("this ",data)
useEffect(()=>{
    const fetchData = async()=>{
       try {
        const data = await axios
        .get(`${URL}${params?.data}${KEY}${Detail}`)
        .then(res=>{
            let dataMovie = res.data;
            setMovie(dataMovie)
            
            setGenres(dataMovie.genres)
           const mov= dataMovie.videos.results;
           const movie = mov.filter((data)=>data.type === "Trailer")[0];
           const test = ["hello"]
           console.log(mov.length)
           if(mov.length <= 0){
            setTrailer(test)
           
           }
     
           const trailers = YT+movie.key;
           setTrailer(trailers)
           if(dataMovie.backdrop_path === null){
            setBackdrop(dataMovie.poster_path)
        
           }else{
            setBackdrop(dataMovie.backdrop_path)
           }
         
            
        });
        setLoading(false);
       }catch(e){
        console.log(e)
       }
    }
    fetchData();

},[params])


        return (
   
           <Box sx={{pt:6,backgroundImage:`url(${BaseImageUrl}${backdrop})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundSize:'100% 100%',
            minHeight:'100vh',
            minWidth:'100%'}}>
            {isLoading? 
            <Box >
                <Loading height={'100vh'} color={"secondary"}/>
            </Box>
            :
             <>
                    <div>
                    
                    <Box sx={{display:"flex",justifyContent: "center",flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center"}} >
                         <h1 style={{textAlign:"center",color:'white'}}>{data?.original_title}</h1>
                    <CardMedia
                        component="img"
                        sx={{ width: 150,height:225}}
                        image= {`${BaseImageUrl}${data?.poster_path}`}
                        alt={`img_${data?.title}`}
                    />
                    </Box>
                        <Box sx={{mt:6,
                            width: "80%",
                            height: "max-content",
                            position: "relative",
                            left: "30px",
                            color:'white'
                        
                        }}>
                    <h3>Synopsys:</h3>
                    <p>{data?.overview}</p>
                </Box>
                    <Box sx={{
                            display: "flex",
                            alignItems: "stretch",
                            justifyContent: "space-around",
                            alignContent: "flex-end",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            color:'white'
                        
                    }}>
                    <h4>Rating : {data?.vote_average}</h4>
                    <h4>Vote : {data?.vote_count}</h4> 
                    <h4>Popularity: {data?.popularity}</h4>
                </Box>
                <Box sx={{    
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center"}}>
                    {data?.genres.map((data)=>(
                    <Button key={data.id} variant="contained" style={{marginLeft:"20px",marginBottom:"30px"}}>{data.name}</Button>))}
                </Box>
                
            
                <h3 style={{color:'white',textAlign:'center'}}>Trailer</h3>
                <Box sx={{p:3,maxWidth:'100%',display:'flex',justifyContent:'center',overflow:'hidden',
                  }}>
                 <Box className="trailerMovie" sx={{padding:'40px 0px 0px 10px',maxWidth:'80%',
                   display:'flex',
                   justifyContent:'flex-start',
                   overflow:'hidden',
                   overflowX:'scroll',
                
                   
                 }}>
                 {data?.videos?.results.map((data)=>{
                    return(
                         <CardMedia 
                             sx={{width:"auto",height:"max-content",
                            p:1}}>
                                <div style={{height:'auto',width:'auto'}}> 
                                    <iframe key={data.id} frameBorder= "0" 
                                        className="movieTrail" 
                                        src={YT+data.key} allowFullScreen>
                                        </iframe>
                                    </div>
                           
                         </CardMedia>)
                                 })}
                   </Box>
                 </Box>
                 <Box sx={{p:8,display:'flex',justifyContent:'center'}}>
                    <Button variant="contained" href={data?.homepage}>Homepage</Button>
                 </Box>
            </div>
               
           
         
            </>
}
                
                </Box>
            
    )
}
export default DetailMovie;