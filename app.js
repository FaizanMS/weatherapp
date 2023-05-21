let getWeather = ()=>{
    let c_name = document.querySelector("#cityname").value
    let myApiKey = "a7dbc0c7fae4fc00acc8a74bea741742"
    let sirApiKey = "ecf07bafe5f67fa8a66abd728beb563b"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=${sirApiKey}`)
    .then((res)=>{
        // document.querySelector("#temp").innerHTML = 'Temperature is: '+ res.data.main.temp
        // document.querySelector("#humidity").innerHTML = 'Humidity is: '+res.data.main.humidity
        // document.querySelector("#temp_max").innerHTML = 'Temp max is: '+res.data.main.temp_max
        // document.querySelector("#temp_min").innerHTML = 'Temp min is: '+res.data.main.temp_min

        let cityname0 = c_name[0]
        let cityname1 = c_name.slice(1)
        let citynamecaps = cityname0.toUpperCase()
        let newCityName  = citynamecaps+cityname1

        document.querySelector('#weathercity').innerHTML = newCityName + "&nbsp; &nbsp;"
        document.querySelector("#temp").innerHTML = res.data.main.temp + "&nbsp;&deg;C"
        document.querySelector("#feels").innerHTML = res.data.main.feels_like + "&nbsp;&deg;C"
        document.querySelector("#humidity").innerHTML = res.data.main.humidity + "&percnt;"
        document.querySelector("#pressure").innerHTML = res.data.main.pressure + "hPa"

        // console.log(cityname0)
        // console.log(cityname1)
        // console.log(citynamecaps)
        // console.log(newCityName)


        console.log(res.data.main)
        
       
       
       // console.log(res.data.main.temp)
        // console.log(res.data.main.pressure)
        // console.log(res.data.main.temp_max)
        // console.log(res.data.main.temp_min)
    })
    .catch((err)=>{
        console.log(err)
    })
}