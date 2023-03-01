


var APIKey = "e7a29c6f4a5754e864692a14224adc4e";
var searchButton = document.getElementById("searchButton");
console.log(searchButton);

var seattleButton = document.getElementById("seattle-button");
console.log(seattleButton);

var portlandButton = document.getElementById("portland-button");
console.log(portlandButton);

var DuluthButton = document.getElementById("duluth-button");
console.log(DuluthButton);

var miamiButton = document.getElementById("miami-button");
console.log(miamiButton);

var chicagoButton = document.getElementById("chicago-button");
console.log(chicagoButton);

var bostonButton = document.getElementById("boston-button");
console.log(bostonButton);

var junoButton = document.getElementById("juno-button");
console.log(junoButton);

var bendButton = document.getElementById("bend-button");
console.log(bendButton);

function getWeatherData(city) {
    


     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
     .then(response => response.json())
     .then(data => {
        console.log(data);
   
   
       
             const temperature = (data.main.temp - 273.15) * 9/5 + 32;
             const tempF = temperature.toFixed(2);
             const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
             const formattedDate = new Date(data.dt * 1000).toLocaleDateString('en-US', dateOptions);
             const windSpeedMPH = data.wind.speed * 2.237;
             const humidity = data.main.humidity;
   
             document.getElementById("current-day").innerHTML = " " 
               
             + data.name
             + "\n"
             + formattedDate 
               + "<br> " 
               + data.weather[0].main 
               + "<br> " 
               + "Temp: "
               + tempF + "°F"
               + "<br>"
               +"Wind: "
               + windSpeedMPH.toFixed(2) + " mph"
               + "<br>"
               + "Humidity: "
               + humidity + "%"
               + "<br>";
   
     });
   
     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
     .then(response => response.json())
     .then(data => {
        console.log(data);
   
        const forecasts = [
             { id: "day-1", index:0 },
             { id: "day-2", index:8 },
             { id: "day-3", index:16 },
             { id: "day-4", index:24 },
             { id: "day-5", index:32}
   
        ];
   
        
       
        forecasts.forEach(forecast => {
             const temperature = (data.list[forecast.index].main.temp - 273.15) * 9/5 + 32;
             const tempF = temperature.toFixed(2);
             const date = new Date(data.list[forecast.index].dt_txt);
             const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
             const formattedDate = date.toLocaleDateString('en-US', dateOptions);
             const windSpeedMPH = data.list[forecast.index].wind.speed * 2.237;
             const humidity = data.list[forecast.index].main.humidity;
       
             const element = document.getElementById(forecast.id);
             element.innerHTML = " " 
               + formattedDate 
               + "<br> " 
               + data.list[forecast.index].weather[0].main 
               + "<br> " 
               + "Temp: "
               + tempF + "°F"
               + "<br>"
               + "Wind: "
               + windSpeedMPH.toFixed(2) + " mph"
               + "<br>"
               + "Humidity: "
               + humidity + "%"
               + "<br>";
   
   
   
   
       });
       });
     }

     
     

document.getElementById("seattle-button").addEventListener("click", function() {
     getWeatherData("Seattle");
});

document.getElementById("portland-button").addEventListener("click", function() {
     getWeatherData("Portland");
});
document.getElementById("duluth-button").addEventListener("click", function() {
     getWeatherData("Duluth");
});

document.getElementById("miami-button").addEventListener("click", function() {
     getWeatherData("Miami");
});


document.getElementById("chicago-button").addEventListener("click", function() {
     getWeatherData("Chicago");
});

document.getElementById("boston-button").addEventListener("click", function() {
     getWeatherData("Boston");
});
document.getElementById("juno-button").addEventListener("click", function() {
     getWeatherData("Juno");
});

document.getElementById("bend-button").addEventListener("click", function() {
     getWeatherData("Bend");
});



document.getElementById("searchButton").addEventListener("click", function() {
     var city = document.getElementById("cityInput").value;
     
    
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
.then(response => response.json())
.then(data => {
   console.log(data);


  
        const temperature = (data.main.temp - 273.15) * 9/5 + 32;
        const tempF = temperature.toFixed(2);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        const windSpeedMPH = data.wind.speed * 2.237;
        const humidity = data.main.humidity;

        document.getElementById("current-day").innerHTML = " " 
          
        + data.name
        + "\n"
        + formattedDate 
          + "<br> " 
          + data.weather[0].main 
          + "<br> " 
          + "Temp: "
          + tempF + "°F"
          + "<br>"
          +"Wind: "
          + windSpeedMPH.toFixed(2) + " mph"
          + "<br>"
          + "Humidity: "
          + humidity + "%"
          + "<br>";

});

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
.then(response => response.json())
.then(data => {
   console.log(data);

   const forecasts = [
        { id: "day-1", index:0 },
        { id: "day-2", index:8 },
        { id: "day-3", index:16 },
        { id: "day-4", index:24 },
        { id: "day-5", index:32}

   ];

   
  
   forecasts.forEach(forecast => {
        const temperature = (data.list[forecast.index].main.temp - 273.15) * 9/5 + 32;
        const tempF = temperature.toFixed(2);
        const date = new Date(data.list[forecast.index].dt_txt);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        const windSpeedMPH = data.list[forecast.index].wind.speed * 2.237;
        const humidity = data.list[forecast.index].main.humidity;
  
        const element = document.getElementById(forecast.id);
        element.innerHTML = " " 
          + formattedDate 
          + "<br> " 
          + data.list[forecast.index].weather[0].main 
          + "<br> " 
          + "Temp: "
          + tempF + "°F"
          + "<br>"
          + "Wind: "
          + windSpeedMPH.toFixed(2) + " mph"
          + "<br>"
          + "Humidity: "
          + humidity + "%"
          + "<br>";




  });
  });



   });


