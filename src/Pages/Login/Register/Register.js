import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';

const Register = () => {
   

    const [loginData, setLoginData]=useState({})

    const handleOnChange=e=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...loginData}
        newLoginData[field]=value
        setLoginData(newLoginData)
       
    }

    const handleLoginSubmit=e=>{
        alert('Hello')
        e.preventDefault()
    }


    return (
        <Container>

        <Grid container spacing={2}>
        <Grid style={{display:'flex',alignItems: 'center'}} item xs={12} md={6}>
           <Box>
           <Typography variant='body1'>Register</Typography>

            <form onSubmit={handleLoginSubmit}>

            <TextField sx={{width:'90%'}}
                    id="standard-search"
                    label="Your Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard"
                    />
                    <TextField sx={{width:'90%', mb:1}}
                    id="standard-search"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard"
                    />
                      <TextField sx={{width:'90%', mb:5}}
                    id="standard-search"
                    label="Your Password"
                    type="password"
                    name="password2"
                    onChange={handleOnChange}
                    variant="standard"
                    />
                    <br />
                <Button type='submit' variant='contained'>Register</Button> <br />
                <Link to={'/login'}>Already Register? Please Click here for login</Link>
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

export default Register;