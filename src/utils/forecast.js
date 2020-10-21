const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8e00b220302a4d8aa9384b096e15affd`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.cod !== 200) {
      callback("Unable to find location".undefined);
    } else {
      callback(undefined, body.weather[0].main);
    }
  });
};
module.exports = forecast;
