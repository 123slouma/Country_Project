import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './InputCountry.css';

const InputCountry = ({fetchCountryDetails}) => {
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClick = () => {
    navigate(`/country/${country}`);
    fetchCountryDetails(country);
     // Naviguer vers la page du pays avec le nom du pays en tant que paramètre d'URL
  };

  return (
    <div className="img-background">
      <div className="input-container">
        <input
          type="text"
          placeholder='Entrer your country...'
          id="countryname"
          name="countryname"
          value={country}
          onChange={handleInputChange}
        />
        <button  onClick={handleClick}>Explorer</button>
        
      </div>
    </div>
  );
};

export default InputCountry;
