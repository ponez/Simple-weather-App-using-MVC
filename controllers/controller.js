const request = require('request');

const key = '79930c4365d66775142c8c56073398bc'

exports.renderHomePage = (req,res) => {
    res.render('index', {weather: null, error: null})
}

exports.letsRenderDaPost = (req,res) => {
    let city = req.body.city;
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
    request(url, (err, response, body) => {
        if(err) {
            res.render('index', {weather : null , error : 'Error please do it agaiN?'})
        } else {
            let weather = JSON.parse(body)
            let tempC =  (weather.main.temp-32) / 1.8
            if(weather.main == undefined) {
               res.render('index', {weather : null, error : 'Error please do it agaiN?'})  
            } else {
                let weatherText = `It's about ${tempC.toFixed(2)} in ${weather.name}`
                res.render('index', {weather : weatherText, error: null})
            }
        }
    })
}
