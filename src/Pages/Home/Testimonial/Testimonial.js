import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'


const Testimonial = () => {
    return (
    <Container sx={{my:10}}>

        <Grid container spacing={2}>

            <Grid   item xs={12} md={4}>
            <Paper sx={{p:3}} variant="outlined" square >
                <Typography  sx={{textAlign:'justify',mb:4 }}>
                Magnam atque quisquam ducimus quo nam! Lorem ipsum dolor,  sit amet consectetur adipisicing elit.Nequ Lorem, ipsum dolor sit amet Consecteturrem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus similique reiciendis numquam fuga rerum sint modi, corporis nisi pariatur.
                </Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                    <Box><img src={people1} alt="" /></Box>
                        <Box>
                            <Typography variant='h6'>Winson Herry</Typography>
                            <Typography >
                                California
                            </Typography>
                        </Box>
                </Box>
            </Paper> 
            </Grid>


            <Grid   item xs={12} md={4}>
            <Paper sx={{p:3}} variant="outlined" square >
                <Typography  sx={{textAlign:'justify',mb:4 }}>
                Magnam atque quisquam ducimus quo nam! Lorem ipsum dolor,  sit amet consectetur adipisicing elit.Nequ Lorem, ipsum dolor sit amet Consecteturrem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus similique reiciendis numquam fuga rerum sint modi, corporis nisi pariatur.
                </Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                    <Box><img src={people2} alt="" /></Box>
                        <Box>
                            <Typography variant='h6'>Kate Herry</Typography>
                            <Typography >
                                Australia
                            </Typography>
                        </Box>
                </Box>
            </Paper> 
            </Grid>

            <Grid   item xs={12} md={4}>
            <Paper sx={{p:3}} variant="outlined" square >
                <Typography  sx={{textAlign:'justify',mb:4 }}>
                Magnam atque quisquam ducimus quo nam! Lorem ipsum dolor,  sit amet consectetur adipisicing elit.Nequ Lorem, ipsum dolor sit amet Consecteturrem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus similique reiciendis numquam fuga rerum sint modi, corporis nisi pariatur.
                </Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                    <Box><img src={people3} alt="" /></Box>
                        <Box>
                            <Typography variant='h6'> Lara Winson </Typography>
                            <Typography >
                                Canada
                            </Typography>
                        </Box>
                </Box>
            </Paper> 
            </Grid>

        </Grid>

        </Container>
    );
};

export default Testimonial;