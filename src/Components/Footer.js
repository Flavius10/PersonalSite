import './Footer.css';
import Logo from '../Images/Logo-CodeJourney.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TextField from '@mui/material';

const Footer = () => {
  
  const currentYear = new Date().getFullYear
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleOpenPage = (page) => {
    const paths = {
      'Home' : '/',
      'Portofolio' : '/portofolio',
      'About Me' : '/about',
      'Contact' : '/contact'
    }
    navigate(paths[page]);
  };

  
  const handleFacebookOpen = () =>{
    window.open('https://www.facebook.com', '_blank', 'noopener,noreferrer');
};

const handleInstagramOpen = () => {
    window.open('https://www.instagram.com','_blank', 'noopener,noreferrer');
};

const handleGitHubOpen = () => {
  window.open('https://github.com/Flavius10','_blank', 'noopener,noreferrer' )
};

  const pages = ['Home','About Me','Portofolio', 'Contact',];

  return (
    <footer className="footer">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column for xs, row for md+
          justifyContent: 'space-between', // Distribute space between items
          alignItems: 'center', // Center items vertically
          padding: 2,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for xs, row for md+
            gap: 2,
            justifyContent: { xs: 'flex-start', md: 'flex-start' }, // Align left
            alignItems: 'center',
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleOpenPage(page)} // Correct event handler
              sx={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'monospace',
                fontWeight: 700,
                margin: 1,
                minWidth: 'auto',
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for xs, row for md+
            alignItems: { xs: 'flex-start', md: 'center' }, // Align to the left for xs, center for md+
            gap: 2,
            marginTop: { xs: 2, md: 0 }, // Add margin-top for xs screens
          }}
        >
          <FacebookRoundedIcon
            color="primary"
            sx={{ fontSize: 40 }}
            cursor="pointer"
            onClick={handleFacebookOpen}
          />
          <InstagramIcon
            color="secondary"
            sx={{ fontSize: 40 }}
            cursor="pointer"
            onClick={handleInstagramOpen}
          />
          <GitHubIcon
            sx={{ fontSize: 40, color: 'black' }}
            cursor="pointer"
            onClick={handleGitHubOpen}
          />

        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Code Journey<CopyrightIcon sx={{ fontSize: 20 }} />
            {currentYear}.All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;