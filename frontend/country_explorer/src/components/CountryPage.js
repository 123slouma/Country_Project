// CountryPage.js
import React from 'react';
import "./CountryPage.css"

const CountryPage = ({ countryDetails }) => {
  console.log(countryDetails);
  if (!countryDetails) {
    return (
      <div>
        <h1>REST Countries API</h1>
      </div>
    );
  }


  const { capitalCountry, 
    nameOfficial, 
    cca2Country, 
    flag,
    nameCommon, 
   } = countryDetails[0]; // Accéder à l'objet contenant la clé 'capitalCountry'
  console.log(countryDetails)
  return (
    <div>
      <div id="main-container">
        <div id="info-container">
        <p>{nameOfficial}</p>
        <p>{nameCommon}</p>
        <p>({cca2Country})</p>
        <p>Capital: {capitalCountry}</p>
        </div>
        <div id="flag-container">
          <img src={flag} alt="Country Flag" />
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
