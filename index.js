const axios = require('axios');
const fs = require('fs')
const handlebars = require('handlebars')

async function fetchWeatherData() {
    try {
        let apiUrl = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
        const WeatherResponse = await axios(apiUrl);
        this.jsonData = WeatherResponse.data
        const templateSource = fs.readFileSync('./weather.html', 'utf8');
        this.template = handlebars.compile(templateSource);
        this.Html = template(this.jsonData);
        fs.writeFileSync('weatherReport.html', Html);
        console.log("HTML report saved successfully!");
    }
    catch (Error) {
        console.log("Error Not Found")
        throw Error
    }
}
fetchWeatherData()

