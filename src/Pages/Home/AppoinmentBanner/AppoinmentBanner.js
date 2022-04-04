import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
import { Button, Container, Typography } from '@mui/material';

const appoinmentBanner={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175,
}


const AppoinmentBanner = () => {
    return (
       <Container>
            <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{width:'400px', marginTop:'-110px'}} src={doctor} alt="" />
          </Grid>

          <Grid item xs={12} md={6} sx={{display:'flex',justifyContent: 'flex-start' ,
          alignItems:'center',
          textAlign:'left' }}>
            
            <Box >
            <Typography variant='h6' sx={{mb:3}} style={{color:'#5CE7ED'}}>
                Appoinment
            </Typography>
            <Typography variant='h4' sx={{mb:3}}  style={{color:'white'}}>
               Make an Appoinment TOday
            </Typography>
            <Typography variant='h6' sx={{mb:3}}  style={{color:'white', fontSize:14, fontWeight:300}}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam ullam hic perferendis aliquid fugit temporibus dolores repudiandae incidunt ut.
            </Typography>
            <Button variant='contained'>Learn More</Button>
            </Box>

          </Grid>
        </Grid>
      </Box>
       </Container>
    );
};

export default AppoinmentBanner;