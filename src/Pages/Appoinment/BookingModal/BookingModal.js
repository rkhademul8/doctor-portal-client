import { Fade, Modal, Typography,Backdrop, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor:'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const BookingModal = ({openBooking,handleBookingClose,booking,date}) => {
  
    const {name,time}=booking

    const handleBookingSubmit=e=>{

        alert('submit done')

        e.preventDefault()
        handleBookingClose()
        
        
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             {name}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
           
                        <TextField
                        disabled
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                        />

                        <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue="Your name"
                        size="small"
                        />
                        <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue="Your email"
                        size="small"
                        />
                        <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue="Your phone number"
                        size="small"
                        />
                        <TextField
                        disabled
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                        />

                        <Button type='submit' variant='contained'>Book</Button>
            </form>

          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;