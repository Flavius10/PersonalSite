import './Footer.css';
import Logo from '../Images/Logo-CodeJourney.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Footer = () => {
  
  const currentYear = new Date().getFullYear
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <footer className="footer">       
        <Box sx={{ width: '100%',
             typography: 'body1', 
             color:'black', fontSize: 20}} >
            <TabContext value={value} sx={{backgroundColor:"#839788"}}>
                <Box sx={{ borderBottom: 0, borderColor: '#FAF2E7' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                    <Tab sx={{fontSize: 16}} label="Item One" value="1" />
                    <Tab sx={{fontSize: 16}} label="Item Two" value="2" />
                    <Tab sx={{fontSize: 16}} label="Item Three" value="3" />
                </TabList>
                </Box>
                <TabPanel sx={{backgroundColor:"#839788"}} value="1">Item One</TabPanel>
                <TabPanel sx={{backgroundColor:"#839788"}} value="2">Item Two</TabPanel>
                <TabPanel sx={{backgroundColor:"#839788"}} value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    </footer>
  );
}

export default Footer;