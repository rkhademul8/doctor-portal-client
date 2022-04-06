import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth"

import './Navigation.css'


const Navigation = () => {
    const {user,logout}=useAuth()
    return (   
    <Box className='nav' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ width:'50%', textAlign:'left' }}>
            Doctor Portal
          </Typography>
          <Link to="/home">Home</Link>
          <Link to="/appoinment">Appoinments</Link>          
          <Link to="/register">Register</Link>

          { user?.email ? 
          <Box sx={{marginTop:'6px'}}>
            <Link to="/dashboard">Dashboard</Link>
            <Button onClick={logout} color="inherit">Logout</Button>

          </Box>
          
          :
          <Link to="/login">Login</Link>}

        </Toolbar>
      </AppBar>
    </Box>
       
    );
};

export default Navigation;