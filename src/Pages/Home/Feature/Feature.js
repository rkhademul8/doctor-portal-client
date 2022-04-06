import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png'
import { height } from '@mui/system';

const Feature = () => {

    const service={
        marginTop:'100px',
      
    }


    return (
     <Container style={service}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%',height:'550px'}} src={treatment} alt="" />
                </Grid>
                <Grid sx={{textAlign:'left',display:'flex',alignItems:'center', }} item xs={12} md={6}>
               <Box>
               <Typography sx={{mb:5,fontWeight:'600'}} variant='h4'>
                    Exceptional Dental Care, on Your Terms
                </Typography>
                <Typography sx={{mb:5}} variant='h6' style={{color:'gray', fontSize:20, fontWeight:300}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam atque quisquam ducimus perspiciatis mollitia, voluptatem accusamus neque consequatur quo nam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cumque veritatis labore ratione incidunt? Perferendis cumque eligendi molestias, sequi, veritatis ab vero sunt quidem aspernatur, totam fugiat sapiente praesentium perspiciatis nostrum aliquam! 
                </Typography>
                
                <Button variant="contained">Learn More</Button>
               </Box>
                </Grid>
               
                
            </Grid>
         </Box>
    </Container>


    );
};

export default Feature;