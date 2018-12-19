const axios = require('axios');

const getClima = async(latitud, Longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${Longitud}&appid=147f5edb5b12c85ede41f612fd0afb12&units=metric`)

    let tiempo = resp.data.main.temp;

    return tiempo;

}
module.exports = {
    getClima
}