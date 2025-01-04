import React from 'react';
import aboutus from '../assets/images/about us.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src={aboutus} alt="About Us" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="lg:w-1/2 pl-6">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Paws & Play, we are passionate about providing the best products for your furry friends. Our mission is to enhance the lives of dogs and their owners through high-quality, innovative products that promote health, happiness, and adventure.
          </p>
          <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;