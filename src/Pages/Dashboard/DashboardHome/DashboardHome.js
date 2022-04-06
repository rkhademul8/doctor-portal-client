import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appoinments from '../Dashboard/Appoinments';

const DashboardHome = () => {
    const [date, setDate]=useState(new Date())
    return (
        <Grid container spacing={2}>

        <Grid item xs={12} md={5}>
            <Calender
            date={date}
            setDate={setDate}
            ></Calender>
        </Grid>

        <Grid item xs={12} md={7}>
        <Appoinments date={date}></Appoinments>
        </Grid>
        
        </Grid>
    );
};

export default DashboardHome;