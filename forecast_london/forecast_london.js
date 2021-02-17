fetch('http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=bf35cac91880cb98375230fb443a116f')
    .then(function (res) {return res.json() })
    .then(function (data) {
        console.log(data);
        let date = document.getElementsByClassName("date");
        for (let i = 0; i < date.length; i++)
        {
            date[i].innerHTML = data.list[i].dt_txt;
        }

        let picture = document.getElementsByClassName("picture");
        for (let i = 0; i < picture.length; i++)
        {
            picture[i].innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[i].weather[0]['icon']}@2x.png">`;
        }

        let temp = document.getElementsByClassName("temp");
        for (let i = 0; i < temp.length; i++)
        {
            temp[i].innerHTML = Math.round(data.list[i].main.temp - 273) + '&deg;';
        }


        let weather = document.getElementsByClassName("weather");
        for (let i = 0; i < weather.length; i++)
        {
            weather[i].innerHTML = data.list[i].weather[0].description;
        }
    })