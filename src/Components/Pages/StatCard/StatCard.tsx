import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import "../../../Assets/Font/fontfamily.css"

const StatCard = ({ statData }) => {
  // console.log('statData: ', statData);

  return (
    <Grid
      container
      spacing={1}
      sx={{ backgroundColor: "white",padding:1,borderRadius:1 }}
    >
      <Grid
        item
        xs={8}
      >
        <Box>
          <Typography className ="allFont"sx={{fontWeight:500,fontSize:20}}>{statData.count}</Typography>
          <Box>{statData.title}</Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Box sx={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:statData.colorToShow,alignItems:'center',justifyContent:'center',display:'flex'}}>{statData.icon}</Box>
      </Grid>
    </Grid>
  );
};

export default StatCard;
