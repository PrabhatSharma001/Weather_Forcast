import React, { useState } from 'react';
import { Card, Typography, Divider, Box, Checkbox } from "@mui/material";
// import {useState} from 'react'
import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import GrainIcon from "@mui/icons-material/Grain";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";



const WeatherCard = () => {


  return (
    <Card
      sx={{
        width: 300,
        padding: 3,
        borderRadius: 4,
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        color: "white",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
        Bangladesh
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" fontWeight="bold">
          26°C
        </Typography>
        <FilterDramaIcon sx={{ fontSize: 60, color: "white" }} />
        {/* <i className="fa-solid fa-cloud"></i> */}
      </Box>

      <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
        Rainy Storm Clouds
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        Thursday | 6:15 PM
      </Typography>

      <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.3)" }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Box display="flex" alignItems="center">
          <Checkbox
            icon={<AirIcon />}
            checkedIcon={<AirIcon />}
            checked={false}
            sx={{ color: "white", p: 0, mr: 1 }}
          />
          <Typography>Wind Speed</Typography>
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>6 mph</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Checkbox
            icon={<OpacityIcon />}
            checkedIcon={<OpacityIcon />}
            checked={true}
            sx={{ color: "white", p: 0, mr: 1 }}
          />
          <Typography>Humidity</Typography>
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>80%</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Checkbox
            icon={<WbSunnyIcon />}
            checkedIcon={<WbSunnyIcon />}
            checked={false}
            sx={{ color: "white", p: 0, mr: 1 }}
          />
          <Typography>Air quality</Typography>
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>29</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default WeatherCard;
