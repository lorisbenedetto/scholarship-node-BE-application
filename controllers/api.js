const axios = require('axios');


exports.getMarsInformation = (req, res, next) => {
    const nasaUrl = 'https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0';
    axios.get(nasaUrl)
        .then(response => {
            const sol_keys = response.data['sol_keys'];
            const lastSol = sol_keys[sol_keys.length - 1];

            const informationsToRet = {
                sol: lastSol,
                av: Math.round(response.data[lastSol]['AT']['av'] * 10) / 10,
                mn: Math.round(response.data[lastSol]['AT']['mn'] * 10) / 10,
                mx: Math.round( response.data[lastSol]['AT']['mx'] * 10 ) / 10,
                LastUTC: response.data[lastSol]['Last_UTC'].substring(0, 10)
            };

            res.status(200).send(informationsToRet);
        })
        .catch(e => {
            console.log(e);
        })
};
