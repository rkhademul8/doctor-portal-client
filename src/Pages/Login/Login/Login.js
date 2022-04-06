import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const [loginData, setLoginData]=useState({})
    const {user,isLoading,authError,loginUser,signInWithGoogle}=useAuth()

    const location=useLocation()
    const history=useHistory()

    const handleOnChange=e=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...loginData}
        newLoginData[field]=value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit=e=>{

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle(location, history)
    }

    return (
      <div>
          <Navigation></Navigation>
           <Container>
           

            <Grid container spacing={2}>
            <Grid style={{display:'flex',alignItems: 'center'}} item xs={12} md={6}>
               <Box>
               <Typography variant='body1'>Login</Typography>

              { !isLoading &&  <form onSubmit={handleLoginSubmit}>

                    <TextField sx={{width:'90%'}}
                    id="standard-search"
                    label="Your Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard"
                    />
                    <TextField sx={{width:'90%', mb:5}}
                    id="standard-search"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard"
                    />
                        <br />
                    <Button type='submit' variant='contained'>Login</Button>
                    <br />
                <Link to={'/register'}>New User?? Please Click here for register</Link>
                </form>}
                <p>-------------------------------</p>
                <Button onClick={handleGoogleSignIn}  variant='contained'>Google Sign In</Button>

            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login successfully</Alert>}
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

export default Login;