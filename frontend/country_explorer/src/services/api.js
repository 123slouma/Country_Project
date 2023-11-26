import axios from 'axios';

export const fetchCountryDetails = async (countryName) => {
    try {
        const response = await axios.get(`http://localhost:3000/countries/${countryName}`);
        return response.data;
    } catch (error) {
      console.error('Error fetching country details:', error);
      return null;
    }
};
    

