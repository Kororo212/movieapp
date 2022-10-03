import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import axios from "axios"
import { useEffect, useState } from "react"



export const MovieApi = createApi({
    reducerPath:'movieApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://api.themoviedb.org/3"}),
    endpoints:(builder)=>({
        getAllMovies : builder.mutation({
            query:(page)=>({
              url:`/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
             
            })
        }),
        searchMovie: builder.mutation({
            query:(data)=>({
              url:`search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${data}`,
            })
        }),
        trendingMovieDay:builder.query({
            query:()=>({
              url: `/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
            })
        }),
        indoMovie:builder.mutation({
           query:(page)=>({
            url:`discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_original_language=id&page=${page}`
           })
        }),
        getDetailMovie: builder.mutation({
           query:(data)=>({
            url:`movie/${data}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
           })
        })
        
        
    })
})

export const {
    useGetAllMoviesMutation,
    useSearchMovieMutation,
    useTrendingMovieDayQuery,
    useIndoMovieMutation,
    useGetDetailMovieMutation,
} = MovieApi





export default function useGetMovies({query,pageNumber}) {
    const [loading,setLoading] = useState(true)
    const [err,setError] = useState(false)
    const [movies,setMovies] = useState([])
    const [hasMore,setHasmore] = useState(false)


    useEffect(()=>{
      let cancel 
      setLoading(true)
      setError(false)
       axios({
          method:'GET',
          url:'https://api.themoviedb.org/3',
          params:{query,pageNumber},
          cancelToken : new axios.CancelToken(c=>cancel = c)

       }).then((res)=>{
          setMovies(prev => [...prev,res])
          setHasmore(res.length >0)
          setLoading(false)
       }).catch((err)=>{
          if(axios.isCancel()) return
          setError(true)
       })
       return ()=>cancel()

    },[query,pageNumber])
    return {loading,err,movies,hasMore}
}

