
    // your JavaScript code here

  

var APIKey = "b2050e87b6e297995821a5383db9b1ec"

function city(cityName) {
    fetch(
      "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid" +
        cityName +
        "&appid=" +
        APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `
          <div class="city">${data.name}</div>
          <div class="city">Temp: ${data.main.temp}K</div>
          <div class="city">Wind: ${data.wind.speed} m/s</div>
          <<div class="city">Humidity: ${data.main.humidity}%</div>
        `;
      })
      .catch((error) => console.error(error));
  }
  
  const searchInput = document.querySelector(".input");
  const searchButton = document.querySelector(".button.is-info");

  const cities = JSON.parse(localStorage.getItem("cities")) || [];
  const cityList = document.getElementById("city-list");
  cities.forEach((city) => {
    const listItem = document.createElement("li");
    listItem.textContent = city;
    cityList.appendChild(listItem);
  });
  
  searchButton.addEventListener("click", () => {
    const cityName = searchInput.value;
    city(cityName);

    if (!cities.includes(cityName)) {
      cities.push(cityName);
      localStorage.setItem("cities", JSON.stringify(cities));

      const listItem = document.createElement("li");
      listItem.textContent = cityName;
      cityList.appendChild(listItem);
    }

   
  });
  


