const axios = require('axios');

const getWeather = async (lat, lon) => {
  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermapKey}&units=metric`,
    timeout: 5000
  });

  const resp = await instance.get();
  if (resp.data.main.temp === 0) {
    throw new Error(`Lat/Lon ${lat}/${lon} not found.`);
  }
  const temp = resp.data.main.temp;
  return temp;
}

module.exports = {
  getWeather
}
