import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import login from '../../../images/login.png'

const Login = () => {

    const handleLoginSubmit=e=>{
        alert('Hello')
        e.preventDefault()
    }
    return (
       <Container>

            <Grid container spacing={2}>
            <Grid style={{display:'flex',alignItems: 'center'}} item xs={12} md={6}>
               <Box>
               <Typography variant='body1'>Login</Typography>

                <form onSubmit={handleLoginSubmit}>

                    <TextField sx={{width:'90%'}}
                    id="standard-search"
                    label="Your Email"
                    type="email"
                    variant="standard"
                    />
                    <TextField sx={{width:'90%', mb:5}}
                    id="standard-search"
                    label="Your Password"
                    type="password"
                    variant="standard"
                    />
                        <br />
                    <Button type='submit' variant='contained'>Login</Button>
                </form>
               </Box>
                
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
            
            
            </Grid>

       </Container>
    );
};

export default Login;