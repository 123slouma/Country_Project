import React, { useEffect, useState } from 'react';
import './CountryPage.css';
import CountryMap from './CountryMap'; // Import CountryMap correctly
import img from '../un.jpg';
import iso from '../iso.png';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Man, Woman } from '@mui/icons-material';

const CountryPage = ({ countryDetails }) => {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countryDetails) {
        setSelectedCountryDetails(countryDetails[0]);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countryDetails]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <MagnifyingGlass
          type="MagnifyingGlass"
          color="#3f51b5"
          height={400}
          width={100}
          className="MagnifyingGlass"
        />
      </div>
    );
  }

  const {
    capitalCountry,
    nameOfficial,
    cca2Country,
    flag,
    nameCommon,
    lat,
    lng,
    continent,
    population,
    indp,
    status,
    unMember,
    currenciesNames,
    currenciesSymbols,
    languagesNames,
    timezonesNames,
    subregion,
    area,
    demonymF,
    demonymM,
  } = selectedCountryDetails;

  return (
    <div className="country-container">
      {/* Flag and country name section */}
      <div id="flag-container">
        <img src={flag} alt="Country Flag" className="flag-image" />
        <h2>
          {nameCommon} - {nameOfficial} ({cca2Country})
        </h2>
      </div>

      {/* Map and country details section */}
      <div className="map-container">
        <div className="details-container">
          <div className="container-images">
            <div className="img-text-container">
              {unMember ? (
                <p className="un-member-text">UN Member</p>
              ) : (
                <p className="un-member-text">Non-UN Member</p>
              )}
              {<img src={img} alt="UN Flag" className="un-member-image" />}
            </div>
            <div className="img-text-container">
              {status && <p className="status-text">{status}</p>}
              {status && <img src={iso} alt="Status Flag" className="status-image" />}
            </div>
          </div>
          <div className="details-grid">
            <p className="language">
              Languages : 
              <ul>
                {languagesNames.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </p>
            <p className="timezone">
              Timezones : 
              <ul>
                {timezonesNames.map((timezone, index) => (
                  <li key={index}>{timezone}</li>
                ))}
              </ul>
            </p>
            <p className="female">
              <Woman />
              {demonymF}
            </p>
            <p className="male">
              <Man />
              {demonymM}
            </p>
            <p className="currencies">
              Currencies : {currenciesNames} - {currenciesSymbols}
            </p>
            <p className="population">Population : {population}</p>
            {indp ? (
              <p className="independent">An independent country</p>
            ) : (
              <p className="independent">Not an independent country</p>
            )}
          </div>
        </div>
        <CountryMap lat={lat} lng={lng} />
      </div>

      {/* Country information details */}
      <div className="grid-container">
        <div className="grid-item">Capital : {capitalCountry}</div>
        <div className="grid-item">Continent : {continent}</div>
        <div className="grid-item">Area : {area}</div>
        <div className="grid-item">Subregion : {subregion}</div>
      </div>
    </div>
  );
};

export default CountryPage;
