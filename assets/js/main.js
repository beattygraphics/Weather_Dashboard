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
});

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

