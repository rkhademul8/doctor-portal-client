import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Link } from 'react-router-dom';


const BannerBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.4)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:50,
}

const verticalCenter={
    display:'flex',
    height:400,
    alignItems:'center',
}

const Banner = () => {
    return (
   <Container style={BannerBg}>
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={6}>

             <Box>

             <Typography sx={{mb:3}} variant='h4'>
                    Your new Smile
                    Starts Here
              </Typography>
              <Typography  variant='h6' sx={{fontSize:14, color:'white', fontWeight:300,mb:3}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis inventore temporibus repudiandae dolore cumque! Quod sequi doloremque sunt culpa?
              </Typography>

              <Link style={{textDecoration:'none'}} to="/appoinment"><Button variant='contained'> Get Appoinment</Button></Link>

             </Box>
            
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'400px'}} src={chair} alt="" />
          </Grid>
          
        </Grid>
      </Box>
   </Container>
    );
};

export default Banner;