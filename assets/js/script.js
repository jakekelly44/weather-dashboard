//Declarations //

var citySearch;
var APIkey = '&appid=28870b55a52a06273a2463ffab2469f7';
var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
var uviAPI = 'https://api.openweathermap.org/data/2.5/uvi?lat=';
var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var geoAPI = navigator.geolocation;
var units = '&units=imperial';
var getWeatherIcon = 'http://openweathermap.org/img/wn/';
var searchHistoryArr = [];

//END Declarations //

//Functions//

// Search input trim and val//

function search() {
    $('#search-button').on('click', function() {
        citySearch = $('#search-input')
            .val()
            .trim();

        if (citySearch === '') {
            return;
        }
        $('#search-input').val('');
        getWeather(citySearch);
    });
}

// End Search input//



//ENDFunctions//