import React, { useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import CategoryNavigation from '../components/Home/CategoryNavigation';
import MapIntegration from '../components/Home/MapIntegration';
import FeaturedShops from '../components/Home/FeaturedShops';
import ValueProposition from '../components/Home/ValueProposition';
import GiftSection from '../components/Home/GiftSection';
import TestimonialSection from '../components/Home/TestimonialSection';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch('/api/google-maps-key');
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Error fetching API key: ${response.status} ${response.statusText} - ${errorText}`);
          throw new Error(`Failed to fetch API key: ${errorText}`);
        }
        const data = await response.json();
        setApiKey(data.apiKey);
        console.log('API Key fetched successfully:', data.apiKey);
      } catch (error) {
        console.error('Error fetching API key:', error);
      }
    };

    fetchApiKey();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <GiftSection />
      <TestimonialSection />
      {/* <CategoryNavigation /> */}
      <MapIntegration apiKey={apiKey} />
      <FeaturedShops />
      <Footer />
    </div>
  );
};

export default Home;