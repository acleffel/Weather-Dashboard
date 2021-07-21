

const apiKey = "c163371d7888ef7c2f96284147e2a14c";


const urlQuery = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"


function getWeather(cityName){ 
    //  Using saved city name, execute a current condition get request from open weather map api
            let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey; 
            fetch(queryURL) 
            .then(function(response){
                return response.json();
            })
        } 
        
        
        