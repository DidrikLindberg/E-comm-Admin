import React, { useEffect, useRef } from 'react';

const MapIntegration = ({ apiKey }) => {
  const mapRef = useRef(null);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 34.4208, lng: -119.6982 }, // Set a default center
      zoom: 12,
      mapTypeId: window.google.maps.MapTypeId.MAP,
    });
    
    console.log('Map initialized:', map); // Log the map object
  };

  useEffect(() => {
    window.initMap = initMap; // Attach initMap to the window object

    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    if (apiKey) {
      loadMapScript();
    }

    return () => {
      const existingScript = document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.initMap = null; // Set to null instead of deleting
    };
  }, [apiKey]);

  return (
    <div>
      <h2>Map Integration</h2>
      <div ref={mapRef} style={{ width: '100%', height: '400px', backgroundColor: 'lightblue' }} /> {/* Add a background color for visibility */}
    </div>
  );
};

export default MapIntegration;