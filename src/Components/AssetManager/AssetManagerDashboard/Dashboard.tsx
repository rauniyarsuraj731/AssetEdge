import React from 'react'
import { Box, Typography } from '@mui/material'
import { Layers } from '@mui/icons-material'
import Layout from 'Components/Layout/Layout'
import StatCards from 'Components/Pages/StatCard/StatCards'


function AMDashboard() {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h6'>Hello, John</Typography>
        <StatCards/>
    </Box>  
  )
}

export default AMDashboard