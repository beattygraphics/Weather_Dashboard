// fetch("https://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid="+apiKey , {





6:43
fetch("https://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid="+apiKey , {
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //   object 
    console.log(data);
    // feels like temp 
    console.log(data.main.feels_like +"°");
    // actual temp 
    console.log(data.main.temp +"°");
    // humidity 
    console.log(data.main.humidity +"%")
    // weather discription ie partly cloudly 
    console.log(data.weather[0].description)
  });
//   5 day forcast working just need to work out the dot notation
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=imperial&cnt=5&appid="+apiKey , {
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //   object 
    console.log(data);
  });