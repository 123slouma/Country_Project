// CountryController.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryPage from './CountryPage';
import InputCountry from './InputCountry';
import { fetchCountryDetails, fetchCountries } from '../services/api';

const CountryController = () => {
  const [countryDetails, setCountryDetails] = useState(null);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const countries = await fetchCountries(); // Fetch list of countries from API
        setCountriesList(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountry();
  }, []);

  const handleFetchCountryDetails = async (countryName) => {
    try{
    const details = await fetchCountryDetails(countryName);
    setCountryDetails(details);
    } catch (error) {
      console.error('Error fetching country details:', error)
    }
  };  
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<InputCountry fetchCountryDetails={handleFetchCountryDetails} countries={countriesList}/>}
          />
          <Route
            path="/country/:countryName"
            element={<CountryPage countryDetails={countryDetails} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default CountryController;
