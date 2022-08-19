import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineSeparator} from '@mui/lab'
export const Fetchapi = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const generateuser = () =>{
        setLoading(true);
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>{setData(data)
                     setLoading(false)
                    console.log(data)})
    }
    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>{setData(data)
                     setLoading(false)
                    console.log(data)})
      
    }, [])
    
  return (
    <>
      <Box m={2} sx={{height:'200px',width:'100%',margin:'0 auto'}}>
        {loading?<Box sx={{margin:"0 auto"}}><CircularProgress/></Box>:<>
        <Box><img src={data.results[0].picture.medium} alt="profile"/>
        </Box>
        <Box sx={{pl:'40%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'baseline'}} >
        <Typography variant="h6">Name: {data.results[0].name.first} {data.results[0].name.last}</Typography>
        <Typography variant="h6">Age:  {data.results[0].dob.age}</Typography>
        <Typography variant="h6">Email:  {data.results[0].email}</Typography>
        </Box>
        </>}
    </Box>

        <Button variant="contained" onClick={generateuser}>Generate user</Button>
      
    </>
  )
}
