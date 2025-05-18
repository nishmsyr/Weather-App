const location = document.getElementById("location"),
converter = document.getElementById("converter"),
weatherIcon = document.getElementById(".weather-icon"),
temperature = document.getElementById(".temperature"),
feelsLike = document.getElementById(".feelsLike"),
date = document.getElementById(".date"),
city = document.getElementById(".city"),
HValue = document.getElementById("HValue"),
WValue = document.getElementById("WValue"),
SRValue = document.getElementById("SRValue"),
SSValue = document.getElementById("SSValue"),
CValue = document.getElementById("CValue"),
UVValue = document.getElementById("UVValue"),
PValue = document.getElementById("PValue"),
forecast = document.querySelector(".forecast");

WEATHER_API_ENDPOINT='https://api.openweathermap.org/data/2.5/weather?appid=a5bb4718b30b6f5858697997567fffa&q=';
WEATHER_DATA_ENDPOINT='https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f5858697997567fffa&exclude=minutely&units=metric&'

function findLocation() {
    fetch(WEATHER_API_ENDPOINT+location.value).then((response)=>response.json()).then((data) => {
        if(data.cod!='' && data.cod!=200){
            alert(data.message);
            return;
        }
        console.log(data.coord.lon, data.coord.lat); });
    })
}


