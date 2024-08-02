import React, { useState } from 'react';
import { Box, TextField, Button, Card, Chip, Stack, Divider} from '@mui/material';
import { Typography } from '@mui/material';
import axios from 'axios';

const ContactPage = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://localhost:7229/api/sendmail`, {
        name,
        email,
        message
      });
      alert('Email sent successfully: ' + response.data);
    } catch (error) {
      console.error("There was an error sending the email!", error);
      const errorMessage = error.response?.data?.message || error.message || "Error sending email.";
      alert(errorMessage);
    }
  };


  return (
    <div className="body">

      {/* Form */}
       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100vw', flex: '1', gap: 5, pb: 5 }}>
      <Typography sx={{ fontSize: 40, fontFamily: 'monospace' }}>Contact</Typography>
      <Typography sx={{ fontSize: 30, fontFamily: 'monospace', textAlign: 'center' }}>
        To contact me, leave me a message...
      </Typography>
      <TextField
        id="outlined-basic-1"
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        sx={{ width: { xs: '40vw', md: '80vw' } }}
      />
      <TextField
        id="outlined-basic-2"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: { xs: '40vw', md: '80vw' } }}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Message"
        multiline
        variant="outlined"
        onChange={(e) => setMessage(e.target.value)}
        sx={{ width: { xs: '40vw', md: '80vw' } }}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ width: { xs: 100, md: 150 }, height: 50, backgroundColor: '#BAA898', color: 'black' }}>
        Submit
      </Button>
    </Box>

      <Divider sx={{mb: 3}}/>


      {/* Cards */}

    <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              width: '100vw',
              height: '40%',
              gap: 6,
              pb:5
            }}
      >


      <Card variant="outlined"  sx={{
      width: { xs: '100%', sm: 360 }, // Responsive width
      backgroundColor: '#BFD7EA',
      justifyContent: 'center',
      alignItems: 'center',
      mb: { xs: 2, md: 0 } // Margin bottom for spacing on xs screens
    }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              Phone
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            If you want to call me on my phone:
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Phone number:
          </Typography>

          <table>
            <tr>
              <td fontSize="10">
                Phone: <a href="tel:+40754702164"> 0754702164</a>
              </td>
            </tr>
          </table>



        </Box>
    </Card>

    <Card variant="outlined"  sx={{
      width: { xs: '100%', sm: 360 }, // Responsive width
      backgroundColor: '#BFD7EA',
      justifyContent: 'center',
      alignItems: 'center',
      mb: { xs: 2, md: 0 } // Margin bottom for spacing on xs screens
    }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              Email
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
           If you need more information through email:
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2" sx={{fontSize: 15}}>
            Email:
          </Typography>

          <div>Email: flaviusa1010@gmail.com</div>
        </Box>
    </Card>

    <Card variant="outlined"  sx={{
      width: { xs: '100%', sm: 360 }, // Responsive width
      backgroundColor: '#BFD7EA',
      justifyContent: 'center',
      alignItems: 'center',
      mb: { xs: 2, md: 0 } // Margin bottom for spacing on xs screens
    }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            Address
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
          Feel free to visit us during business hours or send us mail.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Adress: Strada Valea Slatintei nr 16A
          </Typography>

        </Box>
    </Card>
  </Box>

    </div>
  );
}

export default ContactPage;
