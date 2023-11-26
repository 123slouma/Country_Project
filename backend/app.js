const express = require('express');
const axios = require('axios');
const app = express();

// Endpoint pour récupérer tous les pays depuis Rest Countries
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Remplacez par l'URL de votre application React
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
app.get('/countries/:countryName', async (req, res) => {
    try {

        const { countryName } = req.params;
        // Faire une requête à l'API Rest Countries pour obtenir la liste des pays
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        
        // Récupérer la liste des pays depuis la réponse de l'API Rest Countries
        const countryDetails = response.data;

        const countryNameDetails = countryDetails.map(
           country => {
            return {
               nameOfficial : country.name.official,
               nameCommon : country.name.nameCommon,
               cca2Country : country.cca2,
               capitalCountry : country.capital,
               flag : country.flags.png,
            };
    });


        // Retourner la liste des pays
        res.json(countryNameDetails);
    } catch (error) {
        console.error('Erreur lors de la récupération des pays :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des pays' });
    }
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

