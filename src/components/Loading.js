import React from "react";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';

const Loading =({height,color})=>{
  
    return(
        <Box>
            <Box sx={{width:'100%',minHeight:{height},
                pt:10
                ,display:'flex'
                ,alignContent:'center'
                ,flexDirection:'column'
                ,justifyContent:'center'
                ,alignItems:'center'
                ,backgroundColor:'black',
                

                }} className="load"
            >
              <CircularProgress color={color} sx={{width:'50%',height:'50%'}}/>
            </Box>
        </Box>
    )
}
export default Loading;