
import { Box, Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SearchBar() {
    const [search,setSearch] = useState("")
    const navigate = useNavigate()


    
    const find = async() =>{
        window.scrollTo(0,0)
        navigate(`/search/${search}`)
        setSearch("")

    }
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Input style={{borderBottom:'3px solid white',backgroundColor:'black',color:'white'}}
         placeholder="Search Movie" value={search}
         onChange={(e)=>{setSearch(e.target.value)}}
        />
       <Button variant="contained" style={{color:'white',marginLeft:'12px'}}
         disabled = {search.length === 0 }
         onClick={()=>{find()}}
       >
        Search
      </Button>

    </Box>
  )
}
