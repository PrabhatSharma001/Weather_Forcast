import "./App.css";
import TextField from "@mui/material/TextField";
import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";
import type { AppDispatch } from "./App/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./features/weatherupdates/todayweatherinfo";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [city, setCity] = useState("");
const displayName:String=city;
  const { weatherData, loading, error } = useSelector(
    (state: any) => state.weather
  );
  console.log("Data of weather is ", weatherData);
  const dataRequired={
    cityName:weatherData.name,
    country:weatherData.sys.country,
    temp:weatherData.main.temp,
    feelsLike:weatherData.main.feels_like,
    tempMin:weatherData.main.temp_min,
    tempMax:weatherData.main.temp_max,
    humidity:weatherData.main.humidity,
    weather:weatherData.weather[0].main,

  }
      console.log("Data required is ",dataRequired);

  useEffect(()=>{
dispatch(fetchWeather((city || "Delhi")));
  },[])
  const handleSearch = (e: any) => {
    let newcity = e.target.value;
    setCity(newcity);
  };
  const handleClick = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };
  return (
    <>
      <div className="w-full h-16 bg-green-300/30  rounded-br-xl rounded-bl-xl flex relative">
        <div className="absolute top-2 right-0 flex items-center gap-4 p-3">
          <div>
            <i className="fa-regular fa-bell text-white"></i>
          </div>
          <TextField
            id="search-city"
            label="Search for a city or location"
            variant="outlined"
            className="rounded-[10px] text-white font-semibold"
            fullWidth
            InputProps={{
              endAdornment: (
                <i
                  className="fa-solid fa-magnifying-glass cursor-pointer"
                  style={{ color: "white", marginRight: "8px" }}
                   onClick={handleClick}
                ></i>
              ),
              sx: {
                height: "2.5rem",
                backgroundColor: "#2563eb", // blue-600
                borderRadius: "10px",
                color: "white",
                "& input": {
                  padding: "0 10rem 0 1rem",
                  height: "50%",
                  color: "white",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
                "&.MuiInputLabel-shrink": {
                  color: "white",
                },
                fontSize: 12,
              },
            }}
            value={city}
            onChange={handleSearch}
          />

          <div>
            <i
              className="fa-regular fa-user text-white"
            ></i>
          </div>
        </div>
      </div>
      {/* <WeatherCard/> */}
      <WeatherCard />
    </>
  );
}

export default App;
