// API Keys
rapidapiKey = '<your_rapidapiKey_key>';
openweathermapKey = '<your_openweathermapKey_key>';

// Imports
const loc = require('./lib/loc-search');
const weather = require('./lib/weather');
const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Address of the city where to obtain the climate',
    demand: true
  }
}).argv;

// APP
const getInfo = async (address) => {
  try {
    const cityInfo = await loc.getLocationLatLon(address);
    const weatherInfo = await weather.getWeather(cityInfo.lat, cityInfo.lon);
    return `The temperature for ${cityInfo.address} is ${weatherInfo}`;
  } catch (e) {
    return `The weather info for ${address} couldn\'t be retrieved.
      \n Here the reson:\n ${e}`;
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log);
