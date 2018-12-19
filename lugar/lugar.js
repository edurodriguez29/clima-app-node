const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`)

    // console.log('Status:', resp.data.status, 'ZERO_RESULTS' === resp.data.status);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location

    // console.log('Coordenadas:', coors.lat, coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}
module.exports = {
    getLugarLatLng
}