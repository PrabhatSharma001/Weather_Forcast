import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { WeatherInfo } from "../../types/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;
export interface WeatherState {
  weatherData: WeatherInfo | null;
  loading: boolean;
  error: string | null;
}
// Define the initial state using that type
const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, thunkAPI) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    if (data.cod !== 200) {
      return thunkAPI.rejectWithValue(data.message);
    }
    console.log("the data is ", data);
    return data;
  }
);

const todayweatherinfoSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todayweatherinfoSlice.reducer;
