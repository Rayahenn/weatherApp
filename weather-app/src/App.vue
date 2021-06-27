<template>
  <div id="app">
    <h1>Weather App</h1>
    <div class="searchForm">
      <input type="text" v-model="city" placeholder="Wpisz miasto..." />
      <button @click="getWeather()">Szukaj</button>
      <h2 v-if="!city">{{ city }}</h2>
    </div>
    <div class="container">
      <div class="row">
        <Locality :locality="locality" />
        <Cloudiness :cloudiness="cloudiness" :description="description" />
        <Temperature :temperature="temperature" />
        <Humidity :humidity="humidity" />
        <Wind :windSpeed="windSpeed" />
        <Pressure :pressure="pressure" />
        <DailyTemp :dailyTemp="dailyTemp" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cloudiness from "./components/Cloudiness";
import Humidity from "./components/Humidity";
import Wind from "./components/Wind";
import Pressure from "./components/Pressure";
import Temperature from "./components/Temperature";
import Locality from "./components/Locality";
import DailyTemp from "./components/DailyTemp";

export default {
  name: "App",
  components: {
    Cloudiness,
    Humidity,
    Wind,
    Pressure,
    Temperature,
    Locality,
    DailyTemp
  },
  data() {
    return {
      apiKey: '749114619e76cd7adc5518a2fbbaa416',
      city: null,
      humidity: null,
      windSpeed: null,
      pressure: null,
      temperature: null,
      cloudiness: null,
      description: null,
      locality: null,
      dailyTemp: null
    };
  },
  methods: {
    getWeather() {
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=" + this.apiKey + "&units=metric&lang=pl").then(response => {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + response.data.coord.lat + "&lon=" + response.data.coord.lon +  "&appid=" + this.apiKey + "&units=metric&lang=pl").then(responseSecondary => {
          console.log(responseSecondary);
          this.dailyTemp = responseSecondary.data.daily;
        });
        console.log(response)
        this.city = null;
        this.humidity = response.data.main.humidity;
        this.windSpeed = response.data.wind.speed;
        this.pressure = response.data.main.pressure;
        this.temperature = response.data.main.temp.toFixed(0);
        this.cloudiness = response.data.weather[0].main;
        this.description = response.data.weather[0].description;
        this.locality = response.data.name;
      });

    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-color: #091f36;
  width: 100%;
  min-height: 100vh;
}
h1 {
  text-align: center;
  color: white;
}
.displayWeather {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  width: 80vw;
  min-height: 600px;
  margin: 0 auto;
}
.icon {
  display: inline;
  position: relative;
  color: white;
  top: 10px;
  font-size: 100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

.searchForm {
  display: flex;
  width: 350px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: transparent;
  input {
    display: block;
    width: 80%;
    margin: auto;
    line-height: 50px;
    border: 2px solid #272c7a;
    border-radius: 50px;
    padding-left: 20px;
    background-color: transparent;
    font-size: 18px;
    color: white;
    transition: 0.3s linear;
    &::placeholder {
      color: white;
    }
    &:focus {
      border-color: #1949b1;
      outline: none;
    }
  }

  button {
    margin: 5px;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: #272c7a;
    border: none;
    color: white;
    transition: 0.3s linear;
    border-radius: 50px;
    &:hover {
      background-color: #1949b1;
    }
  }
}
.box {
  display: flex;
  flex-direction: column;
  background-color: #272c7a;
  margin: 20px;
  opacity: 0.8;
  border-radius: 35px;
  transition: 0.3s ease-in;
  padding: 16px;
  overflow: hidden;
  min-height: 193px;
  &:hover {
    background-color: #1949b1;
  }
  svg {
    transition: 0.2s ease-in;
  }
  span {
    margin-top: 16px;
    text-align: center;
    font-size: 30px;
    color: white;
  }
  .temperatureWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    span + span {
      margin-left: 4px;
    }
  }
}
@media (max-device-width: 600px) {
  .displayWeather {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 300px 300px 300px 300px 300px;
  }
}
</style>
