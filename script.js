const apikey = "b98d40d074dc89087dc3a84ac3087807";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    let temperature = Math.round(data.main.temp);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = temperature + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let weatherState = data.weather[0].main;
    console.log(weatherState);

    switch (weatherState) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        console.log("1");
        break;

      case "Clear":
        weatherIcon.src = "images/clear.png";
        console.log("2");
        break;

      case "Rain":
        weatherIcon.src = "images/rain.png";
        console.log("3");
        break;

      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        console.log("4");
        break;

      case "Mist":
        weatherIcon.src = "images/mist.png";
        console.log("5");
        break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
