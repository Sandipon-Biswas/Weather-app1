//se
var button =document.querySelector("#button");
var input = document.querySelector("#input");
var city = document.querySelector("#city");

button.addEventListener("click",click)


function click() {

    
    city.innerHTML = input.value;

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=b65989e90fc4ad90a1b707dc9c7726bd')
.then(response => response.json())
.then(data => {

   


    for(i = 1; i<6; i++){
        document.getElementById("daymin" + i).innerHTML = "Min Temp: " + Math.floor(data.list[i].main.temp_min - 273.15)+ "°C";
     
    }

    for(i = 1; i<6; i++){
        document.getElementById("daymax" + i ).innerHTML = "Max Temp: " + Math.floor(data.list[i].main.temp_max - 273.15) + "°C";
    }
    
     for(i = 1; i<6; i++){
        document.getElementById("img" + i).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
  

    document.querySelector("#ppp").innerHTML="Today Pressure : "+data.list[0].main.pressure +"Pa";
     document.querySelector("#hhh").innerHTML="Today Humidity : "+data.list[0].main.humidity +"%";
     document.querySelector("#sss").innerHTML="Today wind speed : "+data.list[0].wind.speed +"km/h";
})

.catch(err => alert("Inter a valid city name"))
}

function normal(){
    document.getElementById("input").defaultValue = "London";

    click();
}


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 1; i<6; i++){
        document.getElementById("day" + i).innerHTML = weekday[CheckDay(i)];
    }