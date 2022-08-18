import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, FormControl, FormControlLabel, FormLabel, Grid, ImageList, ImageListItem, MenuItem, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'

const countries=['INDIA','USA','AUSTRALIA','ENGLAND']

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];


export const MaterialUI = () => {
    const [value, setValue] = useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
        console.log(value);
    }
    
    const [exp,setExp] = useState('')
    const handleexpChange = (e) =>{
        console.log(exp);
        return setExp(e.target.value)
    }
    return (
    
    <Stack width='500px' >
        <TextField
            sx={{marginTop:2,width:'15rem'}}
            label="Select Country"
            select
            value={value}
            onChange={handleChange}
            fullWidth
            size="small">
            
            {
                countries.map((country,i)=>
                {
                    return (<MenuItem value={country} key={i}>{country}</MenuItem>)
                })
            }
        </TextField>
            <Autocomplete sx={{width:'15rem'}} label='start typing your country' options={countries} renderInput={(params)=><TextField {...params}/>}/>
        <Stack direction={'column'}>
                <FormControl sx={{width:'15rem'}}>
                    <FormLabel id="experience-group">
                        Select Your Experience
                    </FormLabel>
                    <RadioGroup
                    name="experience"
                    aria-labelledby='experience-group'
                    value={exp}
                    onChange={handleexpChange}>

                        <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
                        <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                        <FormControlLabel control={<Radio/>} label='6-9' value='6-9'/>
                    </RadioGroup>
                </FormControl>
        </Stack>   
        <Grid container direction={'row'}>
            <Grid item>

            <Accordion elevation={3}>
                <AccordionSummary id='panel1' aria-controls='panel1-content'
                expandIcon={<ExpandMoreIcon/>}>
                    REACT
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio modi fuga suscipit numquam iusto corrupti nostrum assumenda, recusandae explicabo. Illum, amet ut itaque repudiandae omnis fugit earum officia consequuntur?
                </AccordionDetails>
            </Accordion>
                </Grid>
                <Grid item>

            <Accordion elevation={3}>
                <AccordionSummary id='panel2' aria-controls='panel2-content'
                expandIcon={<ExpandMoreIcon/>}>
                    Material UI
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio modi fuga suscipit numquam iusto corrupti nostrum assumenda, recusandae explicabo. Illum, amet ut itaque repudiandae omnis fugit earum officia consequuntur?
                </AccordionDetails>
            </Accordion>
                    </Grid>
                    </Grid> 
        <Stack spacing={4}>
         <ImageList sx={{width:500,height:450}} cols={3} rowHeight={164}>
            
                {itemData.map((item,i)=>{
                    return (<ImageListItem key={i}>
                        <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                        alt={item.title}
                        loading='lazy'/>
                    </ImageListItem>)
                })}
            
            </ImageList>           
        </Stack>
    </Stack>
  )
}
