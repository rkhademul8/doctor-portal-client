import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date}) => {

    const {name,time,space}=booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
             <>
             
             <Grid item xs={12} sm={6} md={4}>

                    <Paper elevation={3}  sx={{py:5}}>
                        <Typography variant='h5' sx={{ color: 'info.main', fontWeight:500, }}>
                            {name}
                        </Typography>
                        <Typography variant='h6'>
                            {time}
                        </Typography>
                        <Typography variant='caption'>
                            {space} Spaces Available
                        </Typography> <br />

                        <Button onClick={handleBookingOpen} variant='contained'>Book Appoiment</Button>
                    </Paper>
                 </Grid>  

                 <BookingModal 
                 date={date}
                 booking={booking}
                 handleBookingClose={handleBookingClose}
                 openBooking={openBooking}
                 
                 >
                 </BookingModal>
             
             </>
     
    );
};

export default Booking;