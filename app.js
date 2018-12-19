const lugar = require('./lugar/lugar');
const temp = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await temp.getClima(coordenadas.lat, coordenadas.lng);

        return `La temperatura en ${ coordenadas.direccion} es de ${temperatura} grados centígrados`

    } catch (e) {
        return `No se pudo determinar el clima paa la locación ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));