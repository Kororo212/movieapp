import react, { useCallback, useRef } from 'react';
import MovieCard from '../components/MovieCard';
import {Box} from '@mui/system';
import { useState,useEffect } from 'react';
// import DataMovies from '../data/movies.json';
// import { LineAxisOutlined } from '@mui/icons-material';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import TopList from '../components/TopList';
import { useGetAllMoviesMutation } from '../Features/MoviApi';
import { DataArraySharp } from '@mui/icons-material';
import { async } from '@firebase/util';
import ErrorPages from './ErrorPages';



const MovieList = ()=>{
 
const [page,setPage] = useState(1)
const [getAllMovies,{data,error,isLoading}] = useGetAllMoviesMutation();
const [movie,setMovie]= useState([])


const observer = useRef()



const lastElementRef = useCallback(node=>{
    if(isLoading)return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
           
            setPage(prevPageNumber =>prevPageNumber +1)
        }
    })
    if(node) observer.current.observe(node)
 },[isLoading])


useEffect(()=>{

    getAllMovies(page).then((res)=>{
        setMovie(prev=>[...prev,...res.data.results]) 
    })
      
},[page])
 
 
  
    return (
        <Box sx={{backgroundColor:'black',minHeight:'100vh'}}>
          
      
          
            
               <Box>
                <TopList/>
               </Box>
               <Box sx={{position:'relative',padding:'50px 10px 10px 10px'}}>
                    <SearchBar/>
               </Box>
               <Box id="movie-cards" sx={{padding:'10px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignContent:'space-around'}}>
                    {movie.map((movies,i) =>{
                     if(movie.length === i +1){
                        
                        return(
                             <div key={i} ref={lastElementRef} >
                                <MovieCard  movie={movies}/>
                            </div>
                            )
                        
                     }else{
                       return(<div key={i} >
                        <MovieCard movie={movies}/>
                      </div>)
                      }
                     }
                    )}
                </Box>
                
                    <Box >
                      <Loading height={'180px'} color={"secondary"}/>
                    </Box>
                
             {error && <><ErrorPages/></>}
          
        </Box>
        
    )
}

export default MovieList;