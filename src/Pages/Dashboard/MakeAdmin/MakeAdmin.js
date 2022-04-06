import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {

    const [email, setEmail]=useState('')
    const [success, setSuccess]=useState(false)
    const {token}=useAuth()

    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit=e=>{
        const user={email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>
            {
                if(data.modifiedCount){
                    setSuccess(true)
                    setEmail('')
                    console.log(data);
                }
          
            }
            )
        e.preventDefault()
    }
    return (
        <div>
            <h2>This is admin page</h2>

            <form onSubmit={handleAdminSubmit}>

            <TextField
            label="Email"
            type="Email"
            onBlur={handleOnBlur}
            variant='standard'
            />
            <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;