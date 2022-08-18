import {  Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div className="Home">

    <Card>
        <Typography variant="h4">Home</Typography>
        <CardContent>
        <Typography sx={{fontSize:15,textAlign:"justify"}} variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus esse maxime accusamus exercitationem, id consequuntur quis recusandae dolorum sequi ex laboriosam impedit inventore provident obcaecati. Harum itaque ipsam exercitationem nostrum? Asperiores consectetur earum laudantium neque quaerat reprehenderit numquam corrupti nostrum sequi eveniet ratione, quisquam animi accusantium mollitia veniam pariatur repudiandae illo atque rerum assumenda veritatis incidunt. Vero minus ex voluptate, quos, laborum hic ut id doloremque totam illum quis obcaecati. Expedita, omnis laboriosam a at ipsam repellat quod pariatur rerum, tempore aliquam molestiae, perspiciatis eveniet optio quia ducimus. Voluptate sint consectetur deleniti quos accusamus ipsum maxime. Voluptatibus est expedita consequatur.
            </Typography>
        </CardContent>

    </Card>
    </div>
  )
}

export default Home