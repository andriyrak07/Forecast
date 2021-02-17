fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f')
    .then(function (res) {return res.json() })
    .then(function (data) {
        document.querySelector('.london_name').textContent = data.name;
        document.querySelector('.london_temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.london_weather').textContent = data.weather[0]['description'];
        document.querySelector('.london_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

        document.querySelector('.london_wind').textContent = data.wind.speed;
        document.querySelector('.london_pressure').textContent = data.main.pressure;

        function show(){
            let rise = data.sys.sunset;
            var date = new Date(rise);

            var dd = date.getHours();
            if (dd < 10) dd = '0' + dd;
        
            var mm = date.getMinutes();
            if (mm < 10) mm = '0' + mm;

            let d = (dd-2 + ':' + mm);
            document.querySelector('.london_sunset').innerHTML = d; 

            let rise1 = data.sys.sunrise;
            var date1 = new Date(rise1*1000);

            var dd1 = date1.getHours();
            if (dd1 < 10) dd = '0' + dd1;
        
            var mm1 = date1.getMinutes();
            if (mm1 < 10) mm1 = '0' + mm1;

            let d1 = ((dd1-2) + ':' + (mm1));
            document.querySelector('.london_sunrise').innerHTML = d1; 
        }
        show();
    })


    