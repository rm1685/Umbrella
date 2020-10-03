// date and time display function
let now = new Date();
function changeTime() {
  let timeSpace = document.querySelector("#timeofday");
  let hoursNow = now.getHours();
  let minutesNow = now.getMinutes();
  if (minutesNow < 10) {
    timeSpace.innerHTML = `${hoursNow}:0${minutesNow}`;
  } else {
    timeSpace.innerHTML = `${hoursNow}:${minutesNow}`;
  }
}
changeTime();
function changeDate() {
  let weekdaySpace = document.querySelector("#dayofweek");
  let monthdaySpace = document.querySelector("#dayofmonth");
  let monthSpace = document.querySelector("#month");
  let yearSpace = document.querySelector("#year");
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  weekdaySpace.innerHTML = weekdays[now.getDay()];
  monthdaySpace.innerHTML = now.getDate();
  let tomorrowSpace = document.querySelector("#tomorrow");
  tomorrowSpace.innerHTML = "Tomorrow";
  let secondDaySpace = document.querySelector("#secondday");
  secondDaySpace.innerHTML = weekdays[now.getDay() + 2];
  let thirdDaySpace = document.querySelector("#thirdday");
  thirdDaySpace.innerHTML = weekdays[now.getDay() + 3];
  let fourthDaySpace = document.querySelector("#fourthday");
  fourthDaySpace.innerHTML = weekdays[now.getDay() + 4];
  let fifthDaySpace = document.querySelector("#fifthday");
  fifthDaySpace.innerHTML = weekdays[now.getDay() + 5];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  monthSpace.innerHTML = months[now.getMonth()];
  yearSpace.innerHTML = now.getFullYear();
}
changeDate();
function refreshDateAndTime() {
  now = new Date();
  changeTime();
  changeDate();
}
let refreshButton = document.querySelector("#refreshtime");
refreshButton.addEventListener("click", refreshDateAndTime);

//C or F converter
//defining temperature values
let temperatureValue = document.querySelector("#temperaturevalue");
temperatureValue = temperatureValue.innerHTML;
let celsiusorfarenheitSpace = document.querySelector("#celsiusorfarenheit");
let tomorrowsTemperatureValue = document.querySelector("#tomorrowstemperature");
tomorrowsTemperatureValue = tomorrowsTemperatureValue.innerHTML;
let secondTemperatureValue = document.querySelector("#secondtemperature");
secondTemperatureValue = secondTemperatureValue.innerHTML;
let thirdTemperatureValue = document.querySelector("#thirdtemperature");
thirdTemperatureValue = thirdTemperatureValue.innerHTML;
let fourthTemperatureValue = document.querySelector("#fourthtemperature");
fourthTemperatureValue = fourthTemperatureValue.innerHTML;
let fifthTemperatureValue = document.querySelector("#fifthtemperature");
fifthTemperatureValue = fifthTemperatureValue.innerHTML;
// defining the buttons
let Fconverterbutton = document.querySelector("#Fconverterbutton");
let Cconverterbutton = document.querySelector("#Cconverterbutton");
// defining default temperature type (which is Celsius)
let isItCelsius = true;
// defining update status functions
function updateStatusToFarenheit() {
  isItCelsius = false;
}
function updateStatusToCelsius() {
  isItCelsius = true;
}
// Farenheit
// function converting the value to Farenheit
function toFarenheit(temperature) {
  temperature = Math.round(temperature * 1.8 + 32);
  return temperature;
}
/// functions formatting each temperature into farenheit
function formatFarenheitMain(temperature) {
  let temperatureSpace = document.querySelector("#temperaturevalue");
  temperatureSpace.innerHTML = temperature;
  celsiusorfarenheitSpace.innerHTML = "°F";
}
function formatFarenheitTomorrow(temperature) {
  let tomorrowsTemperatureSpace = document.querySelector(
    "#tomorrowstemperature"
  );
  tomorrowsTemperatureSpace.innerHTML = temperature;
  let tomorrowscelsiusorfarenheitSpace = document.querySelector(
    "#tomorrowscorf"
  );
  tomorrowscelsiusorfarenheitSpace.innerHTML = "°F";
}
function formatFarenheitSecond(temperature) {
  let secondTemperatureSpace = document.querySelector("#secondtemperature");
  secondTemperatureSpace.innerHTML = temperature;
  let secondcelsiusorfarenheitSpace = document.querySelector("#secondcorf");
  secondcelsiusorfarenheitSpace.innerHTML = "°F";
}
function formatFarenheitThird(temperature) {
  let thirdTemperatureSpace = document.querySelector("#thirdtemperature");
  thirdTemperatureSpace.innerHTML = temperature;
  let thirdcelsiusorfarenheitSpace = document.querySelector("#thirdcorf");
  thirdcelsiusorfarenheitSpace.innerHTML = "°F";
}
function formatFarenheitFourth(temperature) {
  let fourthTemperatureSpace = document.querySelector("#fourthtemperature");
  fourthTemperatureSpace.innerHTML = temperature;
  let fourthcelsiusorfarenheitSpace = document.querySelector("#fourthcorf");
  fourthcelsiusorfarenheitSpace.innerHTML = "°F";
}
function formatFarenheitFifth(temperature) {
  let fifthTemperatureSpace = document.querySelector("#fifthtemperature");
  fifthTemperatureSpace.innerHTML = temperature;
  let fifthcelsiusorfarenheitSpace = document.querySelector("#fifthcorf");
  fifthcelsiusorfarenheitSpace.innerHTML = "°F";
}
/// main amalgamated farenheit function
function farenheitButtonFunction() {
  if (isItCelsius === true) {
    formatFarenheitMain(toFarenheit(temperatureValue));
    temperatureValue = toFarenheit(temperatureValue);
    formatFarenheitTomorrow(toFarenheit(tomorrowsTemperatureValue));
    tomorrowsTemperatureValue = toFarenheit(tomorrowsTemperatureValue);
    formatFarenheitSecond(toFarenheit(secondTemperatureValue));
    secondTemperatureValue = toFarenheit(secondTemperatureValue);
    formatFarenheitThird(toFarenheit(thirdTemperatureValue));
    thirdTemperatureValue = toFarenheit(thirdTemperatureValue);
    formatFarenheitFourth(toFarenheit(fourthTemperatureValue));
    fourthTemperatureValue = toFarenheit(fourthTemperatureValue);
    formatFarenheitFifth(toFarenheit(fifthTemperatureValue));
    fifthTemperatureValue = toFarenheit(fifthTemperatureValue);
    updateStatusToFarenheit();
  } else {
    console.log("Already converted to Farenheit");
    updateStatusToFarenheit();
  }
}
Fconverterbutton.addEventListener("click", farenheitButtonFunction);
// Celsius
// function converting the value to Celsius
function toCelsius(temperature) {
  temperature = Math.round((temperature - 32) / 1.8);
  return temperature;
}
/// functions formatting each temperature into celsius
function formatCelsiusMain(temperature) {
  let mainTemperatureSpace = document.querySelector("#temperaturevalue");
  mainTemperatureSpace.innerHTML = temperature;
  celsiusorfarenheitSpace.innerHTML = "°C";
}
function formatCelsiusTomorrow(temperature) {
  let tomorrowsTemperatureSpace = document.querySelector(
    "#tomorrowstemperature"
  );
  tomorrowsTemperatureSpace.innerHTML = temperature;
  let tomorrowscelsiusorfarenheitSpace = document.querySelector(
    "#tomorrowscorf"
  );
  tomorrowscelsiusorfarenheitSpace.innerHTML = "°C";
}
function formatCelsiusSecond(temperature) {
  let secondTemperatureSpace = document.querySelector("#secondtemperature");
  secondTemperatureSpace.innerHTML = temperature;
  let secondcelsiusorfarenheitSpace = document.querySelector("#secondcorf");
  secondcelsiusorfarenheitSpace.innerHTML = "°C";
}
function formatCelsiusThird(temperature) {
  let thirdTemperatureSpace = document.querySelector("#thirdtemperature");
  thirdTemperatureSpace.innerHTML = temperature;
  let thirdcelsiusorfarenheitSpace = document.querySelector("#thirdcorf");
  thirdcelsiusorfarenheitSpace.innerHTML = "°C";
}
function formatCelsiusFourth(temperature) {
  let fourthTemperatureSpace = document.querySelector("#fourthtemperature");
  fourthTemperatureSpace.innerHTML = temperature;
  let fourthcelsiusorfarenheitSpace = document.querySelector("#fourthcorf");
  fourthcelsiusorfarenheitSpace.innerHTML = "°C";
}
function formatCelsiusFifth(temperature) {
  let fifthTemperatureSpace = document.querySelector("#fifthtemperature");
  fifthTemperatureSpace.innerHTML = temperature;
  let fifthcelsiusorfarenheitSpace = document.querySelector("#fifthcorf");
  fifthcelsiusorfarenheitSpace.innerHTML = "°C";
}
//// celsius button main/ amalgamated
function celsiusButtonFunction() {
  if (isItCelsius === false) {
    formatCelsiusMain(toCelsius(temperatureValue));
    temperatureValue = toCelsius(temperatureValue);
    formatCelsiusTomorrow(toCelsius(tomorrowsTemperatureValue));
    tomorrowsTemperatureValue = toCelsius(tomorrowsTemperatureValue);
    formatCelsiusSecond(toCelsius(secondTemperatureValue));
    secondTemperatureValue = toCelsius(secondTemperatureValue);
    formatCelsiusThird(toCelsius(thirdTemperatureValue));
    thirdTemperatureValue = toCelsius(thirdTemperatureValue);
    formatCelsiusFourth(toCelsius(fourthTemperatureValue));
    fourthTemperatureValue = toCelsius(fourthTemperatureValue);
    formatCelsiusFifth(toCelsius(fifthTemperatureValue));
    fifthTemperatureValue = toCelsius(fifthTemperatureValue);
    updateStatusToCelsius();
  } else {
    console.log("Already converted to Celsius");
    updateStatusToCelsius();
  }
}
Cconverterbutton.addEventListener("click", celsiusButtonFunction);
// integrating the weather API
// city search function
function cityWeather(city) {
  let cityInput = city;
  let apiKey = "7571852f2fa939aa0c80cd40a9611936";
  let units = "tbc";
  if (isItCelsius === true) {
    units = "metric";
  } else {
    units = "imperial";
  }
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
  function changeMainWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let weatherDescription = response.data.weather[0].description;
    let temperatureSpaceMain = document.querySelector("#temperaturevalue");
    temperatureSpaceMain.innerHTML = `${temperature}`;
    temperatureValue = temperature;
    let descriptionSpace = document.querySelector("#todaysweatherdescription");
    descriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL).then(changeMainWeather);
  let apiURL5days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=4b0490a6eab7e75fe66c799dccf45ab6&units=${units}`;
  function changeTomorrowsWeather(response) {
    let temperature = Math.round(response.data.list[8].main.temp);
    let weatherDescription = response.data.list[8].weather[0].description;
    let tomorrowsTemperatureSpace = document.querySelector(
      "#tomorrowstemperature"
    );
    tomorrowsTemperatureSpace.innerHTML = temperature;
    tomorrowsTemperatureValue = temperature;
    let tomorrowsDescriptionSpace = document.querySelector(
      "#tomorrowsweatherdescription"
    );
    tomorrowsDescriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL5days).then(changeTomorrowsWeather);
  function changeSecondWeather(response) {
    let temperature = Math.round(response.data.list[16].main.temp);
    let weatherDescription = response.data.list[16].weather[0].description;
    let secondTemperatureSpace = document.querySelector("#secondtemperature");
    secondTemperatureSpace.innerHTML = temperature;
    secondTemperatureValue = temperature;
    let secondDescriptionSpace = document.querySelector(
      "#secondweatherdescription"
    );
    secondDescriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL5days).then(changeSecondWeather);
  function changeThirdWeather(response) {
    let temperature = Math.round(response.data.list[24].main.temp);
    let weatherDescription = response.data.list[24].weather[0].description;
    let thirdTemperatureSpace = document.querySelector("#thirdtemperature");
    thirdTemperatureSpace.innerHTML = temperature;
    thirdTemperatureValue = temperature;
    let thirdDescriptionSpace = document.querySelector(
      "#thirdweatherdescription"
    );
    thirdDescriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL5days).then(changeThirdWeather);
  function changeFourthWeather(response) {
    let temperature = Math.round(response.data.list[32].main.temp);
    let weatherDescription = response.data.list[32].weather[0].description;
    let fourthTemperatureSpace = document.querySelector("#fourthtemperature");
    fourthTemperatureSpace.innerHTML = temperature;
    fourthTemperatureValue = temperature;
    let fourthDescriptionSpace = document.querySelector(
      "#fourthweatherdescription"
    );
    fourthDescriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL5days).then(changeFourthWeather);
  function changeFifthWeather(response) {
    let temperature = Math.round(response.data.list[39].main.temp);
    let weatherDescription = response.data.list[39].weather[0].description;
    let fifthTemperatureSpace = document.querySelector("#fifthtemperature");
    fifthTemperatureSpace.innerHTML = temperature;
    fifthTemperatureValue = temperature;
    let fifthDescriptionSpace = document.querySelector(
      "#fifthweatherdescription"
    );
    fifthDescriptionSpace.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  }
  axios.get(apiURL5days).then(changeFifthWeather);
}

function searchCity(event) {
  let cityInput = document.querySelector("#searchinput");
  event.preventDefault();
  let citySpace = document.querySelector("#city");
  citySpace.innerHTML = cityInput.value;
  cityInput = cityInput.value;
  cityWeather(cityInput);
}
let citySearchbar = document.querySelector("#searchbar");
citySearchbar.addEventListener("submit", searchCity);

//making the geolocation button work
function geolocationWeather() {
  let apiKey = "7571852f2fa939aa0c80cd40a9611936";
  let units = "tbc";
  if (isItCelsius === true) {
    units = "metric";
  } else {
    units = "imperial";
  }
  function changeMainWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.main.temp);
      let weatherDescription = response.data.weather[0].description;
      let temperatureSpaceMain = document.querySelector("#temperaturevalue");
      temperatureSpaceMain.innerHTML = `${temperature}`;
      temperatureValue = temperature;
      let descriptionSpace = document.querySelector(
        "#todaysweatherdescription"
      );
      descriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeMainWeather);
  // tomorrow
  function changeTomorrowsWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.list[8].main.temp);
      let weatherDescription = response.data.list[8].weather[0].description;
      let tomorrowsTemperatureSpace = document.querySelector(
        "#tomorrowstemperature"
      );
      tomorrowsTemperatureSpace.innerHTML = temperature;
      tomorrowsTemperatureValue = temperature;
      let tomorrowsDescriptionSpace = document.querySelector(
        "#tomorrowsweatherdescription"
      );
      tomorrowsDescriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeTomorrowsWeather);
  // second day
  function changeSecondWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.list[16].main.temp);
      let weatherDescription = response.data.list[16].weather[0].description;
      let secondTemperatureSpace = document.querySelector("#secondtemperature");
      secondTemperatureSpace.innerHTML = temperature;
      secondTemperatureValue = temperature;
      let secondDescriptionSpace = document.querySelector(
        "#secondweatherdescription"
      );
      secondDescriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeSecondWeather);
  // third day
  function changeThirdWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.list[24].main.temp);
      let weatherDescription = response.data.list[24].weather[0].description;
      let thirdTemperatureSpace = document.querySelector("#thirdtemperature");
      thirdTemperatureSpace.innerHTML = temperature;
      thirdTemperatureValue = temperature;
      let thirdDescriptionSpace = document.querySelector(
        "#thirdweatherdescription"
      );
      thirdDescriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeThirdWeather);
  // fourth day
  function changeFourthWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.list[32].main.temp);
      let weatherDescription = response.data.list[32].weather[0].description;
      let fourthTemperatureSpace = document.querySelector("#fourthtemperature");
      fourthTemperatureSpace.innerHTML = temperature;
      fourthTemperatureValue = temperature;
      let fourthDescriptionSpace = document.querySelector(
        "#fourthweatherdescription"
      );
      fourthDescriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeFourthWeather);
  //fifth day
  function changeFifthWeather(position) {
    function getWeather(response) {
      let temperature = Math.round(response.data.list[39].main.temp);
      let weatherDescription = response.data.list[39].weather[0].description;
      let fifthTemperatureSpace = document.querySelector("#fifthtemperature");
      fifthTemperatureSpace.innerHTML = temperature;
      fifthTemperatureValue = temperature;
      let fifthDescriptionSpace = document.querySelector(
        "#fifthweatherdescription"
      );
      fifthDescriptionSpace.innerHTML =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
    }
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURLgeolocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURLgeolocation).then(getWeather);
  }
  navigator.geolocation.getCurrentPosition(changeFifthWeather);
  let citySpace = document.querySelector("#city");
  citySpace.innerHTML = "Current Location";
}
let geolocationButton = document.querySelector("#geolocationbutton");
geolocationButton.addEventListener("click", geolocationWeather);
//// weather on start up will be automatically set to return geolocation weather
geolocationWeather();
/// making a help button
let helpButton = document.querySelector("#helpbutton");
function helpFunction() {
  alert(
    "To search for any city, use the search bar and hit enter. To change between Celsius and Fahrenheit, use the F°| C° button. To return to your current location, use the 🌍 button."
  );
}
helpButton.addEventListener("click", helpFunction);
