import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png'


const BannerBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.4)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175,
}

const Contact = () => {
    return (
        <Container style={BannerBg}>
            <Typography sx={{pt:5, color:'white' }} >CONTACT US</Typography>
            <Typography sx={{fontWeight:'600',mb:4,color:'white'}} variant='h5'>Always Connect with us</Typography>
            <Box>

            <TextField sx={{width:'80%' , m:1, backgroundColor:'white'}}
          id="outlined-password-input"
          label="Your Email"
          type="email"
          autoComplete="current-password"
        />
         <TextField sx={{width:'80%' , m:1,backgroundColor:'white'}}
          id="outlined-password-input"
          label=" Your Password"
          type="password"
          autoComplete="current-password"
        />

<TextField sx={{width:'80%' , m:1,backgroundColor:'white'}}
          id="outlined-password-input"
          label=" Your Message"
          multiline
          rows={4}
          type="text"
          autoComplete="current-password"
        />
        <br />
       
        <Button variant="contained">Submit</Button>

            </Box>
        </Container>
    );
};

export default Contact;