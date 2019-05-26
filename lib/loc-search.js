const axios = require('axios');

const getLocationLatLon = async (addressSearch) => {

  const encodedUrlAddress = encodeURI(addressSearch);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrlAddress}`,
    timeout: 5000,
    headers: {
      "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "X-RapidAPI-Key": rapidapiKey
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`Location ${address} not found.`);
  }
  const data = resp.data.Results[0];
  const address = data.name;
  const lat = data.lat;
  const lon = data.lon;

  return {
    address,
    lat,
    lon
  }
}

module.exports = {
  getLocationLatLon
}
