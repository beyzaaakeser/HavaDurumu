const API_URL = "";
const key = '';

const setQuery = (e) =>{
    if(e.keyCode == "13"){
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    let query = `${API_URL}weather?q=${cityName}&APPID=${key}&units=metric&lang=tr`;

    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)

    searchBar.value = "";
}

const displayResult = (weather) => {

    console.log(weather)
    let city = document.querySelector('.city')
    city.innerText = `${weather.name}, ${weather?.sys?.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(weather.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = weather?.weather[0]?.description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keypress', setQuery)

