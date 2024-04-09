import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box,Typography, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,} from '@mui/material';
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const Contact = () => {
  return (
    <Layout >
        <Box sx={{backgroundColor:'rgb(252, 246, 246)'}}> 
          <Box sx={{my:10,ml:10,"& h5": {fontWeight:"bold",mb:2}}}>
          <Typography variant='h5'>Contact My Resturant</Typography>
          <p>
          "Connect with us effortlessly! Whether you're craving culinary advice or eager to reserve a table, our team at may Resturant is at your service. Drop us a line via email or give us a ring. Your satisfaction is our priority, and we can't wait to hear from you!"
          </p>
        </Box>
        <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 075400352
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> subinsunar000@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 9826486158
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </Box>
    </Layout>
  )
}

export default Contact