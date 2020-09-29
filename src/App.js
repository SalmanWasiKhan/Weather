import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import Location from "./components/Location";
import Updates from "./components/Updates";
import DayWeather from "./components/DayWeather";
import axios from "axios";
import moment from "moment";
import Info from "./components/info/Info";

const API_key = "1c5615b6ced6aee183138cf85e8503fe";

function App() {
  const [locationData, setLocationData] = useState({});
  const [updatesData, setUpdatesData] = useState({
    temprature: {
      temp: "",
      weather: "",
      iconId: "",
      iconw: "",
      sunrise: "",
      sunset: "",
    },
    details: [],
  });
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Lahore,pk&appid=${API_key}`
      )
      .then((response) => {
        const { data } = response;
        setLocationData({
          city: data.name,
          country: data.sys.country,
          date: moment().format("dddd D MMM, YYYY"),
        });
        setUpdatesData({
          temprature: {
            temp: `${data.main.temp - 273.15}`,
            weather: data.weather[0].description,
            iconId: data.weather[0].id,
            iconw: data.weather[0].icon,
          },
          details: [
            { name: "High", value: `${data.main.temp_max - 273.15}` },
            { name: "Low", value: `${data.main.temp_min - 273.15}` },
            { name: "Clouds", value: `${data.clouds.all}%` },
            { name: "Wind", value: `${data.wind.speed}m/s` },
            {
              name: "Sunrise",
              value: moment(data.sys.sunrise).format("h:mm a"),
            },
            { name: "Sunset", value: moment(data.sys.sunset).format("h:mm a") },
          ],
        });

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
    exclude=current,minutely,daily&appid=${API_key}`
          )
          .then((response) => {
            setDailyData(
              response.data.hourly.slice(0, 10).map((data) => {
                return {
                  time: moment(data.dt).format("h a"),
                  temprature: `${(data.temp - 273.15).toFixed(1)}`,
                  iconId: data.weather[0].id,
                  iconw: data.weather[0].icon,
                };
              })
            );
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Location data={locationData} />
        <Updates data={updatesData} />
        <DayWeather data={dailyData} />
      </div>
      <Info />
    </div>
  );
}

export default App;
