import axios from 'axios';

// Function to fetch details of a specific country
export const fetchCountryDetails = async (countryName) => {
  try {
    const response = await axios.get(`http://localhost:3000/countries/${countryName}`);
    return response.data; // Ensure the response contains the country details
  } catch (error) {
    console.error('Error fetching country details:', error);
    return null; // Return null in case of an error
  }
};

// Function to fetch a list of countries
export const fetchCountries = async () => {
  try {
    const response = await axios.get('http://localhost:3000/countries'); // Make sure the URL is correct
    return response.data; // Ensure the response contains an array of countries
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error; // Throw an error if there's an issue fetching countries
  }
};
