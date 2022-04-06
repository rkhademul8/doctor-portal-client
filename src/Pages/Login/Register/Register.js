import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
   

    const [loginData, setLoginData]=useState({})
    const history=useHistory()
    const {user,registerUser, isLoading,authError}=useAuth()

    const handleOnBlur=e=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...loginData}
        newLoginData[field]=value
        setLoginData(newLoginData)
       
    }

    const handleLoginSubmit=e=>{
        if(loginData.password !== loginData.password2){
            alert('Sorry password not match')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }


    return (
       <div>
           <Navigation></Navigation>
            <Container>

                <Grid container spacing={2}>
                <Grid style={{display:'flex',alignItems: 'center'}} item xs={12} md={6}>
                <Box>
                <Typography variant='body1'>Register</Typography>

    { !isLoading && <form onSubmit={handleLoginSubmit}>

            <TextField sx={{width:'90%'}}
            id="standard-search"
            label="Your Name"
            type="text"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
            />

            <TextField sx={{width:'90%'}}
            id="standard-search"
            label="Your Email"
            type="email"
            name="email"
            onBlur={handleOnBlur}
            variant="standard"
            />

            <TextField sx={{width:'90%', mb:1}}
            id="standard-search"
            label="Your Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard"
            />
              <TextField sx={{width:'90%', mb:5}}
            id="standard-search"
            label="Your Password"
            type="password"
            name="password2"
            onBlur={handleOnBlur}
            variant="standard"
            />
            <br />
                <Button type='submit' variant='contained'>Register</Button> <br />
                <Link to={'/login'}>Already Register? Please Click here for login</Link>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Create successfully</Alert>}

            {authError && <Alert severity="error">{authError}</Alert>}
        </Box>
            
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={login} alt="" />
        </Grid>


        </Grid>

        </Container>
       </div>
    );
};

export default Register;