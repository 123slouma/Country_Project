const express = require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
    // Set CORS headers to allow requests from http://localhost:3001
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/countries/:countryName', async (req, res) => {
    try {
        const { countryName } = req.params;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        
        const countryDetails = response.data.map(country => {
            const currencies = Object.values(country.currencies);
            const currenciesNames = currencies.map(currency => currency.name);
            const currenciesSymbols = currencies.map(currency => currency.symbol);
            const languages = country.languages;
            const languagesNames = Object.values(languages).map(lang => lang);
            const timezones = country.timezones;
            const timezonesNames = Object.values(timezones).map(time => time);
            const demonyms = Object.values(country.demonyms.eng);
            const [demonymF, demonymM] = demonyms;

            // Translate language codes to language names
            return {
                nameOfficial: country.name.official,
                nameCommon: country.name.common,
                cca2Country: country.cca2,
                capitalCountry: country.capital,
                flag: country.flags.png,
                lat: country.capitalInfo.latlng[0].toFixed(1),
                lng: country.capitalInfo.latlng[1].toFixed(1),
                continent: country.continents[0],
                population: country.population,
                indp: country.independent,
                status: country.status,
                unMember: country.unMember,
                currenciesNames,
                currenciesSymbols,
                languagesNames, 
                timezonesNames,
                region: country.region,
                subregion: country.subregion,
                area: country.area,
                demonyms,
                demonymF,
                demonymM
            };
        });

        res.json(countryDetails);
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).json({ error: 'Error fetching countries' });
    }
});

app.get('/countries', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all'); // Endpoint to fetch all countries
        const countriesList = response.data.map(country => country.name.common);
        res.json(countriesList);
    } catch (error) {
        console.error('Error fetching countries list:', error);
        res.status(500).json({ error: 'Error fetching countries list' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
