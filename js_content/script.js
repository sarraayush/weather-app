/*https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
//1fabce13949e33f44b58f11a83a72de3

let weather = 
    {
        apikey: "1fabce13949e33f44b58f11a83a72de3",
        fetchweather: function(city){
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey
                )
            .then((response) =>response.json())
            .then((data) => this.displayweather(data));
            
            
        },
        displayweather: function(data) {
            if(data.cod == "404")
            {
               window.location.href="../html_page/error404.html";
            }

            const {name} = data;
            const {icon , description} = data.weather[0];
            const {temp , humidity} = data.main;
            const {speed} = data.wind;
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp +"°C";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText= "wind speed: "+ speed + "km\h";

        },
        search: function (){
            this.fetchweather(document.querySelector(".search-bar").value)
        }
    } 

    document.querySelector("button").addEventListener("click",function(){
             weather.search();
    })

