const key = '105883e01debe887198f5e57b066bdfd';

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        getData(searchBox.value)
    }
})

getData = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${key}`)
     .then(weather => {
         return weather.json();
     }) .then(displayResults);
}

displayResults = (weather) => {
    console.log(weather);
    /* City Name */
    const city = document.querySelector('.city');
    city.innerHTML = weather.name;

    /* Degree */
    const degree = document.querySelector('.degree');
    degree.innerHTML = weather.main.temp + "<span>°C</span>";

    /* Weather */
    const weatherInfo = document.querySelector('.weather');
    weatherInfo.innerHTML = weather.weather[0].main;

    /* Hi-Low */
    const highLow = document.querySelector('.hi-low');
    highLow.innerHTML = weather.main.temp_min + "°C/" + weather.main.temp_max +"°C";
} 

setDate = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "Mach", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dateNumber = date.getDate();
    let year = date.getFullYear();
    
    const varDate = day + " " + dateNumber + " " + month + " " + year;

    const dateRef = document.querySelector('.date');
    dateRef.innerHTML = varDate;
}

window.addEventListener('load', setDate(new Date()))