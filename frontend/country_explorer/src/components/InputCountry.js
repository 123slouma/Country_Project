import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './InputCountry.css';
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const InputCountry = ({ fetchCountryDetails, countries }) => {
  const [country, setCountry] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();

  const allCountries = countries ? [...countries].sort() : [];

  const handleChange = (_, newValue) => {
    setCountry(newValue);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleClick = () => {
    if (!country) {
      setAlertOpen(true);
      return;
    }

    const foundCountry = allCountries.find(
      (option) => option.toLowerCase() === country.toLowerCase()
    );

    if (!foundCountry || foundCountry.toLowerCase() !== country.toLowerCase()) {
      setAlertOpen(true);
      return;
    }

    navigate(`/country/${country}`);
    fetchCountryDetails(country);
  };

  return (
    <div className="img-background">
      <div className="input-container">
        <Autocomplete
          disablePortal
          id="combo-box-country"
          options={allCountries}
          value={country}
          onChange={handleChange}
          filterOptions={(options, { inputValue }) =>
            options.filter((option) =>
              option.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          }
          sx={{ width: 350 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter your country..."
              variant="outlined"
            />
          )}
        />
        <IconButton onClick={handleClick}>
          <TravelExploreIcon />
        </IconButton>
        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
          <MuiAlert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
            {(!country && 'Please enter a country name.') ||
              'Please enter a valid country name.'}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};

export default InputCountry;
