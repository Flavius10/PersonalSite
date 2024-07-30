import React from 'react';
import { Box, TextField, Button} from '@mui/material';
import { Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <div className="body">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          width: '100vw', 
          gap: 5,
          border:2
        }}
      >

        <Typography sx={{fontSize:30, 
          fontFamily:'monospace'
        }}>Contact
        </Typography>

        <TextField
          id="outlined-basic-1"
          label="Nume"
          variant="outlined"
          sx={{ width: '40vw' }}
        />
        <TextField
          id="outlined-basic-2"
          label="Email"
          variant="outlined"
          sx={{ width: '40vw' }}
        />
        <TextField
          id="outlined-basic-2"
          label="Email"
          variant="outlined"
          sx={{ width: '40vw' }}
        />

      <Button variant="contained"
              sx={{width:100, height: 50}}>
        Submit
      </Button>

      </Box>

    </div>
  );
}

export default ContactPage;
