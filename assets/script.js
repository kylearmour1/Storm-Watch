

var city = document.getElementById("cityInput").value;
var APIKey = "e7a29c6f4a5754e864692a14224adc4e";






var searchButton = document.getElementById("searchButton");
console.log(searchButton);
document.getElementById("searchButton").addEventListener("click", function() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
  .then(response => response.json())
  .then(data => {
     console.log(data);


    
          const temperature = (data.main.temp - 273.15) * 9/5 + 32;
          const tempF = temperature.toFixed(2);
          const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const formattedDate = new Date(data.dt * 1000).toLocaleDateString('en-US', dateOptions);
          const windSpeedMPH = data.wind.speed * 2.237;
          const humidity = data.main.humidity;

          document.getElementById("current-day").innerHTML += " " 
            
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












  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
  .then(response => response.json())
  .then(data => {
     console.log(data);


     

     const temperature1 = (data.list[0].main.temp - 273.15) * 9/5 + 32;
     const tempF1 = temperature1.toFixed(2);
     const date1 = new Date(data.list[0].dt_txt);
     const dateOptions1 = { year: 'numeric', month: '2-digit', day: '2-digit' };
     const formattedDate1 = date1.toLocaleDateString('en-US', dateOptions1);
     const windSpeedMPH1 = data.list[0].wind.speed * 2.237;
     const humidity1 = data.list[0].main.humidity;
     
     document.getElementById("day-1").innerHTML = " " 
          
          + formattedDate1 
          + "<br> " 
          + data.list[0].weather[0].main 
          + "<br> " 
          + "Temp: "
          + tempF1 + "°F"
          + "<br>"
          +"Wind: "
          + windSpeedMPH1.toFixed(2) + " mph"
          + "<br>"
          + "Humidity: "
          + humidity1 + "%"
          + "<br>";



     const temperature2 = (data.list[8].main.temp - 273.15) * 9/5 + 32;
     const tempF2 = temperature2.toFixed(2);
     const date2 = new Date(data.list[8].dt_txt);
     const dateOptions2 = { year: 'numeric', month: '2-digit', day: '2-digit' };
     const formattedDate2 = date2.toLocaleDateString('en-US', dateOptions2);
     const windSpeedMPH2 = data.list[8].wind.speed * 2.237;
     const humidity2 = data.list[8].main.humidity;
     
     document.getElementById("day-2").innerHTML = " " 
          
          + formattedDate2 
          + "<br> " 
          + data.list[8].weather[0].main 
          + "<br> " 
          + "Temp: "
          + tempF2 + "°F"
          + "<br>"
          +"Wind: "
          + windSpeedMPH2.toFixed(2) + " mph"
          + "<br>"
          + "Humidity: "
          + humidity2 + "%"
          + "<br>";
     

          const temperature3 = (data.list[16].main.temp - 273.15) * 9/5 + 32;
          const tempF3 = temperature3.toFixed(2);
          const date3 = new Date(data.list[16].dt_txt);
          const dateOptions3 = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const formattedDate3 = date3.toLocaleDateString('en-US', dateOptions3);
          const windSpeedMPH3 = data.list[16].wind.speed * 2.237;
          const humidity3 = data.list[16].main.humidity;
          
          document.getElementById("day-3").innerHTML = " " 
               
               + formattedDate3 
               + "<br> " 
               + data.list[16].weather[0].main 
               + "<br> " 
               + "Temp: "
               + tempF3 + "°F"
               + "<br>"
               +"Wind: "
               + windSpeedMPH3.toFixed(2) + " mph"
               + "<br>"
               + "Humidity: "
               + humidity3 + "%"
               + "<br>";  


               const temperature4 = (data.list[24].main.temp - 273.15) * 9/5 + 32;
               const tempF4 = temperature4.toFixed(2);
               const date4 = new Date(data.list[24].dt_txt);
               const dateOptions4 = { year: 'numeric', month: '2-digit', day: '2-digit' };
               const formattedDate4 = date4.toLocaleDateString('en-US', dateOptions4);
               const windSpeedMPH4 = data.list[24].wind.speed * 2.237;
               const humidity4 = data.list[24].main.humidity;
               
               document.getElementById("day-4").innerHTML = " " 
                    
                    + formattedDate4 
                    + "<br> " 
                    + data.list[24].weather[0].main 
                    + "<br> " 
                    + "Temp: "
                    + tempF4 + "°F"
                    + "<br>"
                    +"Wind: "
                    + windSpeedMPH4.toFixed(2) + " mph"
                    + "<br>"
                    + "Humidity: "
                    + humidity4 + "%"
                    + "<br>";
               
          
                    
                    const temperature5 = (data.list[32].main.temp - 273.15) * 9/5 + 32;
                    const tempF5 = temperature5.toFixed(2);
                    const date5 = new Date(data.list[32].dt_txt);
                    const dateOptions5 = { year: 'numeric', month: '2-digit', day: '2-digit' };
                    const formattedDate5 = date5.toLocaleDateString('en-US', dateOptions5);
                    const windSpeedMPH5 = data.list[32].wind.speed * 2.237;
                    const humidity5 = data.list[32].main.humidity;
                    
                    document.getElementById("day-5").innerHTML = " " 
                         
                         + formattedDate5 
                         + "<br> " 
                         + data.list[32].weather[0].main 
                         + "<br> " 
                         + "Temp: "
                         + tempF5 + "°F"
                         + "<br>"
                         +"Wind: "
                         + windSpeedMPH5.toFixed(2) + " mph"
                         + "<br>"
                         + "Humidity: "
                         + humidity5 + "%"
                         + "<br>";
                    
               
     
    
       
     

});
});


     