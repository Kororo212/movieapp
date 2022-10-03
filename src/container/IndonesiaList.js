import MovieCard from '../components/MovieCard';
import {Box} from '@mui/system';
import { useState,useEffect, useRef, useCallback } from 'react';

import axios from 'axios';
import { async } from '@firebase/util';
import Loading from '../components/Loading';
import { useIndoMovieMutation } from '../Features/MoviApi';
import ErrorPages from './ErrorPages';


const Indo =()=>{
   
    const [indoMovie,{data,isLoading,error}] = useIndoMovieMutation()
    const [page,setPage] = useState(1)
    const [movies,setMovies]= useState([])

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
    indoMovie(page).then((res)=>{
        setMovies(prev=>[...prev,...res.data.results])
    })
 },[page])

    return(
        <Box style={{backgroundColor:'black',minHeight:'100vh'}}>
            <Box sx={{pt:10,width:'100%',display:'flex',justifyContent:'center'}}>
                <h1 style={{color:'white',textAlign:'center',borderBottom:'5px solid white'}}>Film Indonesia</h1>
            </Box>
            <Box sx={{display:'flex',flexDirection : 'row',justifyContent:'space-Around',flexWrap:'wrap'}}>   
                    
                {movies&& movies.map((movie,i) =>{
                if(movies.length===i +1){
                    return(
                        <div key={i} ref={lastElementRef}>
                            <MovieCard movie={movie}/>
                        </div>
                    )
                }else{
                    return(

                        <div key={i}>
                            <MovieCard movie={movie}/>
                        </div>

                    )
                }
                 
                })}
                
            </Box>
            <Box sx={{display:'block',minHeight:'200px',minWidth:'100%'}}>
                <Loading height={'200px'} color={"success"}/>
            </Box>
            
            
            {error && <><ErrorPages/></>}

        </Box>
    )

}

export default Indo;