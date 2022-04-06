import { Button, Container, Grid, Typography } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';

const service={
    marginTop:'120px',
    backgroundColor:'gray',
    padding:'50px'
   
  
}

const Footer = () => {
    return (
        <div style={service} sx={{my:10}}>
          <Grid container spacing={2}>
                <Grid sx={{textAlign:'left'}} item xs={12} md={3} >
                    <Typography sx={{mt:5}}>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>



                </Grid>

                <Grid sx={{textAlign:'left'}} item xs={12} md={3} >
                <Typography sx={{fontWeight:'600'}} variant='h5'>Service</Typography>
                <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                </Grid>

                <Grid sx={{textAlign:'left'}} item xs={12} md={3} >
                <Typography sx={{fontWeight:'600'}} variant='h5'>Oral Health</Typography>
                <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                </Grid>

                <Grid sx={{textAlign:'left'}} item xs={12} md={3} >
                <Typography sx={{fontWeight:'600'}} variant='h5'>Our Address</Typography>
                <Typography>New Yark-15330 Hudson Yards</Typography>
                    
                    <Typography>Call Now </Typography>
                    <Button variant='contained'>+5556036540</Button>
                </Grid>

               
                
                
            </Grid>
        </div>
    );
};

export default Footer;