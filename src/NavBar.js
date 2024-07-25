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
import Logo from './Images/Logo-CodeJourney.png';
import InstagramIcon from '@mui/icons-material/Instagram';



const pages = ['Home','Projects', 'Skills','About Me'];
const settings = ['Home','Projects', 'Skills','About Me'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#839788"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1,
             display: { xs: 'block', md: 'flex' },
              alignItems:'center',
              maxWidth:'100px', 
              width:'100%' }}>
                <img
                    src={Logo}
                    alt="LOGO"
                    style={{
                        width: 100, 
                        height: 100,  
                    }}
                    onClick={handleOpenNavMenu}
                    sx={{
                        cursor: { xs: 'pointer', md: 'default' }, 
                        display: { xs: 'flex', md: 'none' },
                    }}
                />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            color: 'black',
                            textDecoration: 'none',
                            width:'100%'
                        }} 
                    >{page} </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Box>


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
              fontSize:30,
              color: 'black',
              textDecoration: 'none',
              textAlign:'center', 
              alignItems: 'center',
              flex:'auto'
            }}
          >
            CodeJourney
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },
                    justifyContent:'center',
                    alignItems:'center',
                    gap: 6,
                    flex:'auto'
                    }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
