import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../Images/Logo-CodeJourney.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const pages = ['Home','Projects', 'Skills','About Me'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handlePageNavigation = (page) =>{
    const paths = {
      'Home' : '/',
      'Projects' : '/project',
      'About Me' : '/about',
      'Skills' : '/skills'
    }
    navigate(paths[page]);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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

  return (
    <AppBar position="sticky" sx={{backgroundColor:"#839788"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logoul */}
          <Box sx={{ flexGrow: 1,
             display: { xs: 'none', md: 'flex' },
              alignItems:'center',
              maxWidth:'100px', 
              width:'100%',
              mr:5,
              display: { xs: 'none', md: 'flex' } }}>
                <img
                    src={Logo}
                    alt="LOGO"
                    style={{
                        width: 100, 
                        height: 100,  
                    }}
                />
            </Box>

         {/* Titlul o data ce devine mic site-ul (ca si pe telefon)  */}
 
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: {
                  xs: '1.5rem',
                  sm: '1.7rem',
                  md: '2rem', 
                  lg: '2.5rem'
              },
              color: 'black',
              textDecoration: 'none',
              textAlign:'center', 
              alignItems: 'center',
            }}
          >

              <img
                    src={Logo}
                    alt="LOGO"
                    style={{
                        maxWidthwidth:60, 
                        maxHeight: 60,  
                    }}
                />
            CodeJourney
          </Typography>

          {/* Meniul in care se aduna toate butoanele catre celelalte pagini */}
          <Box sx={{ flexGrow: 1, 
            display: { xs: 'flex', md: 'none' },
            justifyContent:"flex-end",
            fontSize: 20 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="#EEE0CB"
                  >
                    <MenuIcon />
                  </IconButton>
                
                <Menu
                    id="nav-bar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none'},
                    }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Typography 
                        textAlign="center"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize: 15,
                            color: 'black',
                            textDecoration: 'none',
                            width:'100%'
                        }} 
                    >{page} </Typography>
                    </MenuItem>
                ))}
                </Menu>
          </Box>

          {/* Butoanele care sunt ca si meniu catre celelate pagini */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },
                    justifyContent:'center',
                    alignItems:'center',
                    gap: 6,
                    flex:'auto',
                    border: 2,
                    borderColor: "#EEE0CB"
                    }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageNavigation(page)}
                sx={{ my: 2,
                     color: 'black',
                      display: 'block',
                       fontSize: 20,
                        flex:'none',
                        minWidth:'auto',
                        fontFamily:'monospace',
                        fontWeight:700
                    }}
              >
                {page}
              </Button>
            ))}
          </Box>


            {/* Social media */}
      <Box sx={{ display:{xs:'none', md:'flex'},
                gap: 2,
                alignItems: 'center',
                ml:5}}>
          <Box sx={{ flexGrow: 0}}>
              <FacebookRoundedIcon color="primary"
                sx={{fontSize:40}}
                cursor="pointer"
                onClick={handleFacebookOpen}>

              </FacebookRoundedIcon>
          </Box>

          <Box sx={{ flexGrow: 0}}>
              <InstagramIcon color="secondary"
                sx={{fontSize:40}}
                cursor="pointer"
                onClick={handleInstagramOpen}>

              </InstagramIcon>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <GitHubIcon
                sx={{fontSize:40, color: 'black'}}
                cursor="pointer"
                onClick={handleGitHubOpen}>

              </GitHubIcon>
          </Box>
      </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
