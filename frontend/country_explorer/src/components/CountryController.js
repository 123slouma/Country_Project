// CountryController.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryPage from './CountryPage';
import InputCountry from './InputCountry';
import { fetchCountryDetails } from '../services/api';

const CountryController = () => {
  const [countryDetails, setCountryDetails] = useState(null);

  const handleFetchCountryDetails = async (countryName) => {
    const details = await fetchCountryDetails(countryName);
    setCountryDetails(details);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<InputCountry fetchCountryDetails={handleFetchCountryDetails} />}
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
