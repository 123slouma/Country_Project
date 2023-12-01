import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PinIcon from '../location-pin.png'; // Replace with the path to your custom icon

const CountryMap = ({ lat, lng }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
        mapRef.current = L.map('map', {
            attributionControl: false, // Disable attribution control
          }).setView([lat, lng], 5);      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2xvdW1hNDU2IiwiYSI6ImNscGhqa3d0dTA2ancyam1odWNiOGVscmMifQ.5mIf1foN7wxH9cybA1C03w', {
        attribution: '&copy; Mapbox',
        maxZoom: 18,
        id: 'mapbox/streets-v11', // Replace with your desired map style
        tileSize: 512,
        zoomOffset: -1,
      }).addTo(mapRef.current);

      const PinMarkerIcon = L.icon({
        iconUrl: PinIcon,
        iconSize: [32, 32], // Set the size of your custom icon
        iconAnchor: [16, 32], // Set the anchor point of the icon
      });

      markerRef.current = L.marker([lat, lng], { icon: PinMarkerIcon }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([lat, lng], 5);
      markerRef.current.setLatLng([lat, lng]); // Update marker position
    }
  }, [lat, lng]);

  return <div id="map" style={{ height: '450px', width: '500px', maxWidth : "500px"}} />;

};

export default CountryMap;
