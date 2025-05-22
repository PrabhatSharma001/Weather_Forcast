import React, { useState } from 'react';
import { Card, Typography, Divider, Box, Checkbox } from "@mui/material";
import type { WeatherInfo } from './types/weather';
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { Visibility} from '@mui/icons-material';

interface WeatherCardProps {
  weatherInfo: WeatherInfo;
}

const WeatherCard : React.FC<WeatherCardProps>= ({weatherInfo}) => {
console.log("Weather Info_______________",weatherInfo)

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
       {weatherInfo.cityName}, {weatherInfo.country}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" fontWeight="bold">
          {weatherInfo.temp}° <sup>c</sup>
        </Typography>
        <FilterDramaIcon sx={{ fontSize: 60, color: "white" }} />
      </Box>

      <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
        {weatherInfo.weatherDescription}
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        {weatherInfo.day} | {weatherInfo.time}
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
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>{weatherInfo.windSpeed} mph</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Checkbox
            icon={<OpacityIcon />}
            checkedIcon={<OpacityIcon />}
            checked={true}
            sx={{ color: "white", p: 0, mr: 1 }}
          />
          <Typography>Humidity</Typography>
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>{weatherInfo.humidity}%</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Checkbox
            icon={<Visibility/>}
            checkedIcon={<Visibility/>}
            checked={false}
            sx={{ color: "white", p: 0, mr: 1 }}
          />
          <Typography>Visibility</Typography>
          <Typography sx={{ ml: "auto", fontWeight: "bold" }}>{weatherInfo.visibility}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default WeatherCard;
