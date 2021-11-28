var openCageApiKey = "da5bdce8d6a346bd932d97350bce3cef"
var openWeatherApiKey = "bfb6715647029ad277bf3786d179ae81"

//get cities from api


function getCities(searchTerm) {
    //use openweathermap.org
    //api key is bfb6715647029ad277bf3786d179ae81

    //openweathermap one call only allows for lat long,
    // so we need to use another service (thanks teach) for geoeoncoding
    //see https://opencagedata.com/users/sign_up
    //THAT api key is da5bdce8d6a346bd932d97350bce3cef

    //So to get a city lat long, example
    //https://api.opencagedata.com/geocode/v1/json?q=Atlanta&key=da5bdce8d6a346bd932d97350bce3cef


}

function getLatLng(placeName) {
    //place name will NEED a city, and state ex: Atlanta, GA
    //if in the event that there are more thean one, we will have to use the first one
    var url = "https://api.opencagedata.com/geocode/v1/json?q=" + placeName + "&key=" + openCageApiKey;

    return fetch(url)
        .then(function (response) {
            return response.json();

        })
        .then(function (response) {
            //response has multiple results, will have to pick the first
            var resultCount = response.results;
            if (resultCount === 0) {
                alert("Unable to find location");
                return false;
            }
            else {
                var results = response.results;
                var firstResult = results[0];
                //console.log(firstResult);
                return firstResult.geometry;
            }

        });

}

document.getElementById("search").addEventListener("click", function () {
    var placeName = document.getElementById("userInput").value
    console.log(placeName)
    getWeatherForPlace(placeName);
});


function getWeatherForPlace(placeName) {
    document.getElementById("currentDay").innerHTML="Loading...";
    getLatLng(placeName)
        .then(function (geometry) {
            var lat = geometry.lat;
            var lng = geometry.lng;
            getWeatherForCoords(lat, lng)
                .then(function (response) {

                    //Gets "daily" (currentStuff)
                    console.log(response);

                    var daily = response.daily;
                    var current = response.current;

                    var currentStuff = {};

                    currentStuff.place = current.placeName;                    
                    currentStuff.date = moment.unix(current.dt).format("M/D/Y");
                    currentStuff.temp = current.temp;
                    currentStuff.windSpeed = current.wind_speed;
                    currentStuff.humidity = current.humidity;
                    currentStuff.uvIndex = current.uvi;
                    var iconcode = current.weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    currentStuff.wIconD = "<img src='" + iconUrl + "'>";

                    console.log(currentStuff);

                    // currentDate.innerHTML= current.date;

                    var day1Stuff = {};
                    var day2Stuff = {};
                    var day3Stuff = {};
                    var day4Stuff = {};
                    var day5Stuff = {};


                    console.log(day1Stuff);
                    //UPDATE FFOR DAY 1 stuff DOM element
                    day1Stuff.date = moment.unix(daily[1].dt).format("M/D/Y");
                    day1Stuff.temp = daily[1].temp.day;
                    day1Stuff.wind = daily[1].wind_speed;
                    day1Stuff.humidity = daily[1].humidity;
                    day1Stuff.uvi = daily[1].uvi;
                    var iconcode = daily[1].weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    day1Stuff.wIconD = "<img src='" + iconUrl + "'>";

                   
                   


                    day2Stuff.date = moment.unix(daily[2].dt).format("M/D/Y");
                    day2Stuff.temp = daily[2].temp.day;
                    day2Stuff.wind = daily[2].wind_speed;
                    day2Stuff.humidity = daily[2].humidity;
                    day2Stuff.uvi = daily[2].uvi;
                    var iconcode = daily[2].weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    day2Stuff.wIconD = "<img src='" + iconUrl + "'>";

                    console.log(day2Stuff);
                    //UPDATE FFOR DAY 2 stuff DOM element

                    day3Stuff.date = moment.unix(daily[3].dt).format("M/D/Y");
                    day3Stuff.temp = daily[3].temp.day;
                    day3Stuff.wind = daily[3].wind_speed;
                    day3Stuff.humidity = daily[3].humidity;
                    day3Stuff.uvi = daily[3].uvi;
                    var iconcode = daily[3].weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    day3Stuff.wIconD = "<img src='" + iconUrl + "'>";

                    console.log(day3Stuff);
                    //UPDATE FFOR DAY 3 stuff DOM element

                    day4Stuff.date = moment.unix(daily[4].dt).format("M/D/Y");
                    day4Stuff.temp = daily[4].temp.day;
                    day4Stuff.wind = daily[4].wind_speed;
                    day4Stuff.humidity = daily[4].humidity;
                    day4Stuff.uvi = daily[4].uvi;
                    var iconcode = daily[4].weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    day4Stuff.wIconD = "<img src='" + iconUrl + "'>";
                    console.log(day4Stuff);
                    //UPDATE FFOR DAY 4 stuff DOM element

                    day5Stuff.date = moment.unix(daily[5].dt).format("M/D/Y");
                    day5Stuff.temp = daily[5].temp.day;
                    day5Stuff.wind = daily[5].wind_speed;
                    day5Stuff.humidity = daily[5].humidity;
                    day5Stuff.uvi = daily[5].uvi;

                    var iconcode = daily[5].weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    day5Stuff.wIconD = "<img src='" + iconUrl + "'>";

                    console.log(day5Stuff);
                    //UPDATE FFOR DAY 5 stuff DOM element

                    //Current Day Stuff
                    elem = document.getElementById("placeName");
                    elem.innerHTML="City: " + currentStuff.place;

                    elem = document.getElementById("currentDay");
                    elem.innerHTML="Date: " + currentStuff.date;
                   
                    elem = document.getElementById("currentWIcon");
                    elem.innerHTML=" " + currentStuff.wIconD;

                    elem = document.getElementById("currentTemp");
                    elem.innerHTML="Temp: " + currentStuff.temp;

                    elem = document.getElementById("currentWind");
                    elem.innerHTML="Wind: " + currentStuff.windSpeed;

                    elem= document.getElementById("currentHum");
                    elem.innerHTML="Humidity: " + currentStuff.humidity;     
                    
                    elem= document.getElementById("currentUv");
                    elem.innerHTML="UV Index: " + currentStuff.uvIndex;  

                    //Day 1 stuff
                     elem = document.getElementById("date1");
                    elem.innerHTML="Date: " + day1Stuff.date;

                     elem = document.getElementById("wIconD1");
                    elem.innerHTML=" " + day1Stuff.wIconD;

                     elem = document.getElementById("temp1");
                    elem.innerHTML="Temp: " + day1Stuff.temp;

                     elem = document.getElementById("wind1");
                    elem.innerHTML="Wind: " + day1Stuff.wind;

                     elem = document.getElementById("humidity1");
                    elem.innerHTML="Humidity: " + day1Stuff.humidity;

                     elem = document.getElementById("uvi1");
                    elem.innerHTML="UV Index: " + day1Stuff.uvi;

                    //Day 2 stuff
                     elem = document.getElementById("date2");
                    elem.innerHTML="Date: " + day2Stuff.date;
                     elem = document.getElementById("wIconD2");
                    elem.innerHTML=" " + day2Stuff.wIconD;
                     elem = document.getElementById("temp2");
                    elem.innerHTML="Temp: " + day2Stuff.temp;

                    elem = document.getElementById("wind2");
                    elem.innerHTML="Wind: " + day2Stuff.wind;

                    elem = document.getElementById("humidity2");
                    elem.innerHTML="Humidity: " + day2Stuff.humidity;
                    elem = document.getElementById("uvi2");
                    elem.innerHTML="UV Index: " + day2Stuff.uvi;

                    //Day 3 stuff
                    var elem = document.getElementById("date3");
                    elem.innerHTML="Date: " + day3Stuff.date;
                    var elem = document.getElementById("wIconD3");
                    elem.innerHTML=" " + day3Stuff.wIconD;
                    var elem = document.getElementById("temp3");
                    elem.innerHTML="Temp: " + day3Stuff.temp;
                    var elem = document.getElementById("wind3");
                    elem.innerHTML="Wind: " + day3Stuff.wind;
                    var elem = document.getElementById("humidity3");
                    elem.innerHTML="Humidity: " + day3Stuff.humidity;
                    var elem = document.getElementById("uvi3");
                    elem.innerHTML="UV Index: " + day3Stuff.uvi;
                    
                    //Day 4 stuff
                    var elem = document.getElementById("date4");
                    elem.innerHTML="Date: " + day4Stuff.date;
                    var elem = document.getElementById("wIconD4");
                    elem.innerHTML=" " + day4Stuff.wIconD;
                    var elem = document.getElementById("temp4");
                    elem.innerHTML="Temp: " + day4Stuff.temp;
                    var elem = document.getElementById("wind4");
                    elem.innerHTML="Wind: " + day4Stuff.wind;
                    var elem = document.getElementById("humidity4");
                    elem.innerHTML="Humidity: " + day4Stuff.humidity;
                    var elem = document.getElementById("uvi4");
                    elem.innerHTML="UV Index: " + day4Stuff.uvi;
                    
                    //Day 5 stuff
                    var elem = document.getElementById("date5");
                    elem.innerHTML="Date: " + day5Stuff.date;
                    var elem = document.getElementById("wIconD5");
                    elem.innerHTML=" " + day5Stuff.wIconD;
                    var elem = document.getElementById("temp5");
                    elem.innerHTML="Temp: " + day5Stuff.temp;
                    var elem = document.getElementById("wind5");
                    elem.innerHTML="Wind: " + day5Stuff.wind;
                    var elem = document.getElementById("humidity5");
                    elem.innerHTML="Humidity: " + day5Stuff.humidity;
                    var elem = document.getElementById("uvi5");
                    elem.innerHTML="UV Index: " + day5Stuff.uvi;
                });

        });

}

function getWeatherForCoords(lat, lng) {
    var url = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lng + "&appid=" + openWeatherApiKey;


    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // console.log(response);
            return response;
        });
}

var formSubmitHandler = function (event) {
    event.preventDefault();

    function test(placeName) {
        getLatLng(placeName).then(function (response) {
            console.log(response);
        })
    }

    function getWeatherForPlace(placeName) {
        getLatLng(placeName)
            .then(function (geometry) {
                var lat = geometry.lat;
                var lng = geometry.lng;
                getWeatherForCoords(lat, lng)
                    .then(function (response) {

                        //Gets "daily" (currentStuff)
                        console.log(response);

                        var daily = response.daily;
                        var current = response.current;

                        var currentStuff = {};

                        currentStuff.date = moment.unix(current.dt).format("M/D/Y");
                        currentStuff.temp = current.temp;
                        currentStuff.windSpeed = current.wind_speed;
                        currentStuff.humidity = current.humidity;
                        currentStuff.uvIndex = current.uvi;

                        console.log(currentStuff);

                        // currentDate.innerHTML= current.date;

                        var day1Stuff = {};
                        var day2Stuff = {};
                        var day3Stuff = {};
                        var day4Stuff = {};
                        var day5Stuff = {};


                        day1Stuff.date = moment.unix(daily[1].dt).format("M/D/Y");
                        day1Stuff.temp = daily[1].temp.day;
                        day1Stuff.windSpeed = daily[1].wind_speed;
                        day1Stuff.humidity = daily[1].humidity;
                        day1Stuff.uvIndex = daily[1].uvi;

                        console.log(day1Stuff);
                        //UPDATE FFOR DAY 1 stuff DOM element


                        day2Stuff.date = moment.unix(daily[2].dt).format("M/D/Y");
                        day2Stuff.temp = daily[2].temp.day;
                        day2Stuff.windSpeed = daily[2].wind_speed;
                        day2Stuff.humidity = daily[2].humidity;
                        day2Stuff.uvIndex = daily[2].uvi;

                        console.log(day2Stuff);
                        //UPDATE FFOR DAY 2 stuff DOM element


                        day3Stuff.date = moment.unix(daily[3].dt).format("M/D/Y");
                        day3Stuff.temp = daily[3].temp.day;
                        day3Stuff.windSpeed = daily[3].wind_speed;
                        day3Stuff.humidity = daily[3].humidity;
                        day3Stuff.uvIndex = daily[3].uvi;

                        console.log(day3Stuff);
                        //UPDATE FFOR DAY 3 stuff DOM element

                        day4Stuff.date = moment.unix(daily[4].dt).format("M/D/Y");
                        day4Stuff.temp = daily[4].temp.day;
                        day4Stuff.windSpeed = daily[4].wind_speed;
                        day4Stuff.humidity = daily[4].humidity;
                        day4Stuff.uvIndex = daily[4].uvi;

                        console.log(day4Stuff);
                        //UPDATE FFOR DAY 4 stuff DOM element


                        day5Stuff.date = moment.unix(daily[5].dt).format("M/D/Y");
                        day5Stuff.temp = daily[5].temp.day;
                        day5Stuff.windSpeed = daily[5].wind_speed;
                        day5Stuff.humidity = daily[5].humidity;
                        day5Stuff.uvIndex = daily[5].uvi;

                        console.log(day5Stuff);
                        //UPDATE FFOR DAY 5 stuff DOM element


                    });

            });

    }

    function getWeatherForCoords(lat, lng) {
        var url = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lng + "&appid=" + openWeatherApiKey;


        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                // console.log(response);
                return response;
            });
    }

// Need to figure out how to get my "Calls" on the page.
//WTF....This is my missing piece
}

