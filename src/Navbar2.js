import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    const [anchor, setanchor] = useState(null)
    const open=Boolean(anchor)

    const handleClick = (e) =>{
        setanchor(e.currentTarget)
    }
    const handleClose = () =>{
        setanchor(null)
    }



  return (
    <AppBar sx={{padding:0,textAlign:"center"}} position="static">
        <Toolbar >
            <Stack direction={"row"} spacing={2}>
                <Link style={{textDecoration:'none'}} className="link" to="/Home">
                <Typography sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} variant='subtitle2'>
                     HOME
                    </Typography>
             </Link>   
                <Link style={{textDecoration:'none'}} className="link" to="/Counter">
                <Typography sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} variant='subtitle2'>
                     COUNTER
                    </Typography>
             </Link>   
                <Link style={{textDecoration:'none'}} className="link" to="/List">
                <Typography sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} variant='subtitle2'>
                     LIST
                    </Typography>
             </Link>   
                <Link style={{textDecoration:'none'}} className="link" to="/Aboutus">
                <Typography sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} variant='subtitle2'>
                     ABOUT US
                    </Typography>
                
             </Link>   
                <Link style={{textDecoration:'none'}} className="link" to="/MaterialUI">
                <Typography sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} variant='subtitle2'>
                     MATERIAL UI
                    </Typography>
                 </Link>   
                 <Typography
                  sx={{fontWeight:'bold',textDecoration:"none",color:"white"}} 
                  variant='subtitle2' 
                  component="span" 
                  id='resources-button' 
                  onClick={handleClick} 
                  aria-controls={open?'resources-menu':undefined}
                  aria-haspopup='true'>
                     LINKS
                    </Typography>
                 <Menu
                  anchorEl={anchor}
                  open={open}
                  MenuListProps={{'aria-labelledby':'resources-button'}}
                  onClose={handleClose}>
                        <MenuItem onClick={handleClose}><a href="https://github.com/surajrt10"> Github Profile</a> </MenuItem>
                        <MenuItem onClick={handleClose}><a href> LinkedIn Profile </a></MenuItem>
                        <MenuItem onClick={handleClose}> <a href>Material UI resources </a></MenuItem>

                 </Menu>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}
