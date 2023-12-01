# Country_Project
# Project Name

## Description
This project is a React frontend application communicating with a NodeJS backend running Express. 
The primary objective is to create a user interface allowing users to input a country's name, fetch its details from the REST Countries API via the backend, and render this information back to the user.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Installation
Describe the steps to install the project and any prerequisites required. You can also include code snippets to guide users through the installation process.

## Usage
git clone https://github.com/your-username/your-project.git
cd your-project
cd backend
npm install
node app.js
->the server run on 3000

cd ../frontend
cd country_explorer
->npm install
->npm start
Open your browser and visit http://localhost:3001 to access the application.

## API Endpoints
- `/countries/:countryName`: Retrieves details of a specific country by name.
  - Parameters:
    - `countryName`: Name of the country to retrieve details for.
  - Example: `GET /countries/United States`
- `/countries`: Retrieves a list of all countries.
  - Example: `GET /countries`

*GET /countries/:countryName
    Functionality: Fetches details about a specific country based on the provided country name.
    Parameters:
    countryName (Path Parameter): The name of the country to retrieve details for.
    Expected Response:
    200 OK:
    JSON object containing detailed information about the specified country, including:
    nameOfficial: Official name of the country.
    nameCommon: Commonly used name of the country.
    cca2Country: Country code.
    capitalCountry: Capital city of the country.
    flag: URL to the country's flag image.
    lat: Latitude of the capital city.
    lng: Longitude of the capital city.
    continent: Continent the country belongs to.
    population: Population count.
    indp: Boolean indicating if the country is independent.
    status: Status of the country.
    unMember: Boolean indicating if the country is a UN member.
    currenciesNames: Array of currency names used in the country.
    currenciesSymbols: Array of currency symbols used in the country.
    languagesNames: Array of languages spoken in the country.
    timezonesNames: Array of timezones used in the country.
    region: Region of the country.
    subregion: Subregion of the country.
    area: Area size of the country.
    demonyms: Array of demonyms used in the country.
    demonymF: Female demonym.
    demonymM: Male demonym.
    500 Internal Server Error:
    Error message indicating failure to fetch country details.
    
*GET /countries
    Functionality: Retrieves a list of all available countries.
    Parameters: None
    Expected Response:
    200 OK:
    JSON array containing the names of all available countries.
    500 Internal Server Error:
    Error message indicating failure to retrieve the list of countries.

