import { Box } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

import { useSearchMovieMutation } from '../Features/MoviApi'

export default function SearchMovie() {

  const params = useParams()
  const [movie,setMovie] = useState([])
  const [searchMovie,{isLoading,error,data}] = useSearchMovieMutation()


 useEffect(()=>{
    searchMovie(params?.movie)
 },[params])

  return (
    
    <Box style={{minHeight:'100vh',padding:'80px 10px 10px 10px',backgroundColor:'black',color:'white'}}>

        {isLoading && <Loading height={'100vh'}/>}
        <Box style={{maxWidth:'100%',display:'flex',justifyContent:'center'}}>
            <SearchBar />
        </Box>
        <Box style={{padding:'40px 10px 10px 10px'}}>
            <h3>Results:</h3>

            {data&&data?.results.length ===0?
            <Box style={{paddingLeft:'20%'}}>
                <h3>Sorry, Movie not found</h3>
            </Box>
                :
            <Box sx={{padding:'10px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignContent:'space-around'}}>
                {data&&data?.results.map((movie,i) =>(
                <div key={i}>
                    <MovieCard movie={movie}/>
                    </div>
                ))}
            </Box>
            }
        </Box>
    </Box>
  )
}
