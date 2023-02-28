# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

var city = document.getElementById("cityInput").value;
var APIKey = "ce2eaa6886e0920747a7ce7a941aa475";

var searchButton = document.getElementById("searchButton");
console.log(searchButton);
document.getElementById("searchButton").addEventListener("click", function() {
  
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
   
    
    

    
  })
  .catch(error => {
    console.error(error);
  });
});








var city = document.getElementById("cityInput").value;
var APIKey = "ce2eaa6886e0920747a7ce7a941aa475";

var searchButton = document.getElementById("searchButton");
console.log(searchButton);
document.getElementById("searchButton").addEventListener("click", function() {
  
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
 
    

    
  })
  .catch(error => {
    console.error(error);
  });
});

// List of Dom Elements
var APIkey = '7a7c04d503977a6da6ac8ba6bdb48f18';
var cityInputEl = document.getElementById('city-input');
var submitBtn = document.querySelector('.btn');
var searchedCities = [];
var previousCityEl = document.getElementById('history');
var weatherEl = document.querySelector('#results');
var fivedayEl = document.querySelector('.five-day');
var clearSearch =  document.getElementById('clearBtn')
// This function will pull the api, and then return results based off of search
function getWeather() {
  
  var city = cityInputEl.value;
  var currentDay = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + APIkey;
  fetch(currentDay)
    .then(function (response) {
      if (response.ok) {
        console.log(response.status);
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      displayResults(data);
      fiveDayForecast(data);
      displayCities();
    }); 
    
   };

// This function displays the current day's weather. It is set to display A name, 
function displayResults(data) {

   var cityName = data.city.name;
   var weatherCondition = data.list[0].weather[0].main;
   var weatherDescription = data.list[0].weather[0].icon;
   var temperature = data.list[0].main.temp;
   var windspeed = data.list[0].wind.speed;
   var humidity = data.list[0].main.humidity
   var date = new Date().toLocaleDateString();
   var iconLink ='http://openweathermap.org/img/wn/' + weatherDescription + '@2x.png';

   weatherEl.innerHTML = '<h2>' + cityName + ' '  + date  + "<img src ='"+iconLink+"'/>" + '</h2>' + '<p>Weather:'+ weatherCondition  + '</p>' +'<p>Temperature:' + temperature + '°F</p>' + '<p>Windspeed: ' + windspeed + 'mph</p>' + '<p>Humidity: ' + humidity + '%</p>';

   
    };
   // This function retrieves all of the data for the next 5 days. Inside this, you will see that we pull the same results from the current day, but we are splitting the date and time, while also starting i with a number besides 0 to pull a little further down in the array.
    function fiveDayForecast(data) {
      
          console.log(data);
          var forecastList = data.list;
          console.log(forecastList);
          var fiveDayData = [];
          for (var i = 0; i < forecastList.length; i += 8) {

            var dateAndTime = forecastList[i].dt_txt;
            var dateObj = new Date(dateAndTime);
            var month = dateObj.getMonth() + 1;  // months are zero-indexed
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var date = month + '/' + day + '/' + year;

            var temperature = forecastList[i].main.temp;
            var weatherDescription = forecastList[i].weather[0].description;
            var windSpeed = forecastList[i].wind.speed;
            var humidity = forecastList[i].main.humidity;
            var icon = forecastList[i].weather[0].icon;
            fiveDayData.push({ date, temperature, weatherDescription, windSpeed, humidity, icon});
          }
          
          displayFiveDayForecast(fiveDayData);
       
    }
    // This function is what will display all of the results from above, while setting the icon pulled from the API itself, matching the current weather.    
    function displayFiveDayForecast(fiveDayData) {
      
      fivedayEl.innerHTML = '';
      
      

      var forecastHeader = document.createElement('h2');
       forecastHeader.classList = ('five-day-header');
       forecastHeader.innerHTML = '5 Day Forecast';
       fivedayEl.appendChild(forecastHeader)
     
      for (var i = 0; i < fiveDayData.length; i++) {
        var date = fiveDayData[i].date;
        var temperature = fiveDayData[i].temperature;
        var weatherDescription = fiveDayData[i].weatherDescription;
        var windSpeed = fiveDayData[i].windSpeed;
        var humidity = fiveDayData[i].humidity;
        var icon = fiveDayData[i].icon;
        var iconLink ='http://openweathermap.org/img/wn/' + icon + '@2x.png';

        var dayEl = document.createElement('div');
        dayEl.classList = ('card-body');
        dayEl.innerHTML =  '<h3>' + date + '</h3>' + '<p>Temperature: ' + temperature + '°F</p>' + '<p>Weather: ' + weatherDescription + "<img src ='"+iconLink+"'/>" +  '</p>' + '<p>Wind Speed: ' + windSpeed + 'mph</p>' + '<p>Humidity: ' + humidity + '%</p>';
    
        
        fivedayEl.appendChild(dayEl);
        
      }
    };


// This listener will start the process of pulling the data from your search. It will then store this function in the local storage inside inspect.
 submitBtn.addEventListener('click', function() {
  getWeather();
  searchedCities.push(cityInputEl.value);
  localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
});
// This function is set so it can store the searched results inside the local storage
function displayCities() {
  var storedCities = JSON.parse(localStorage.getItem('searchedCities'));
  if (storedCities !== null) {
    searchedCities = storedCities;
    displaySearchedCities();
  }
};
// This function creates buttons for the searched cities, so you can click on those to check the weather from the searched city again, without having to retype the city.
function displaySearchedCities() {
  previousCityEl.innerHTML = '';
  for (var i = 0; i < searchedCities.length; i++) {
    var cityBtn = document.createElement('button');
    cityBtn.classList = 'list-group-item list-group-item-action';
    cityBtn.textContent = searchedCities[i];
    cityBtn.addEventListener('click', function() {
      cityInputEl.value = this.textContent;
      getWeather();
    });
    previousCityEl.appendChild(cityBtn);
  }
}
 clearSearch.addEventListener('click', clearResults)
  
 


 function clearResults() {
  previousCityEl.innerHTML = '';
  localStorage.removeItem('searchedCities');
 }



 // Notes for myself, eventually go back and add the classlist add and remove to git rid of pesky box at the start of the screen
