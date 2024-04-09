import React, { useState } from "react";
import {AppBar,Box,Typography,Toolbar,IconButton,Drawer, Divider} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom'
import "../../Styles/HeaderStyle.css";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const[mobileOpen,setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} component="div" variant="h6" sx={{flexGrow:1,my:2,cursor:'pointer'}}>
      <FastfoodIcon/>
      <Link to={"/"} style={{ color: 'goldenrod', textDecoration: 'none' }}>My Restaurant</Link>
           </Typography>
              <Divider/>
            <ul className="mobile-navigation">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>AboutUs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
            </ul>
          
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},}}onClick={handleDrawerToggle}>
               <MenuIcon/>
            </IconButton>
           <Typography color={'goldenrod'} component="div" variant="h6" sx={{flexGrow:"1",cursor:'pointer'}}>
              <FastfoodIcon/>
              <Link to={"/"} style={{ color: 'goldenrod', textDecoration: 'none' }}>My Restaurant</Link>
           </Typography>
          <Box sx={{display:{xs:"none", sm:"block"} }}>
            <ul className="navigation-menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>AboutUs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
           <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },}}>
            {drawer}
           </Drawer>
        </Box>
        <Box> 

        <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
