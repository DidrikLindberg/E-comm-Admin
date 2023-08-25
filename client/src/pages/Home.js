import React from 'react';
import { Link } from 'react-router-dom';
import productimg from '../assets/images/Organic Dog Food.png';
import BlackCanopy from '../assets/images/Dog Bowtie Collar.jpg';
import WhitePartyTent from '../assets/images/Elevated Dog Cot.jpg';
import BannerImg from '../assets/images/hero-dog.png';
import aboutus from '../assets/images/about us.jpg';

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 pl-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 pl-6">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-purple-600 tracking-wide">Welcome to <span className="text-pink-500">Paws & Play</span> – Your Canine Companion's Ultimate Paradise!</h1>
<p className="text-lg text-gray-600 mb-8">Join us in <span className="text-pink-500">celebrating the wonderful world of dogs</span> – where each product is designed to make tails wag, hearts melt, and adventures unforgettable. Let the shopping begin, and let the happiness flow! 🐶🛍️</p>
<Link to="/shopping" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Shop Now</Link>

            </div>
            <div className="lg:w-1/2">
              <img src= {BannerImg} alt="Banner" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-16">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-61">
          <img
            src={BlackCanopy}
            alt="Product"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Bowtie Collar</h3>
          <p className="text-gray-700 mb-2">Price: $35.00</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-61">
          <img
            src={productimg}
            alt="Product"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Organic Dog Food</h3>
          <p className="text-gray-700 mb-2">Price: $75.00</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-61">
          <img
            src={WhitePartyTent}
            alt="Product"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Elevated Dog Cot</h3>
          <p className="text-gray-700 mb-2">Price: $35.00</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-16 px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Customer Reviews</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Customer"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">Verified Buyer</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          "My dog absolutely loves the toys I got from Paws & Play! The quality is fantastic and they provide hours of entertainment."
        </p>
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-yellow-500">4.5 Stars</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Customer"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Verified Buyer</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          "The dog bed I purchased from Paws & Play exceeded my expectations. It's comfortable and my pup loves it!"
        </p>
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-yellow-500">5 Stars</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="absolute inset-0 z-10 opacity-0 bg-gray-700"></div>
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Customer"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Alex Johnson</h3>
            <p className="text-gray-600">Verified Buyer</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          "The selection of toys at Paws & Play is impressive. My dog loves every toy I've purchased from this store."
        </p>
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-yellow-500">4 Stars</p>
        </div>
      </div>

      

    </div>
  </div>
</section>


<section className="bg-gray-100 py-16 px-16">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="lg:pr-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Who We Are</h2>
        <p className="text-lg text-gray-600 mb-4">
          At Paws & Play, we're more than just an online store. We're a passionate community of dog lovers and enthusiasts dedicated to bringing joy to both you and your furry companions.
        </p>
        <p className="text-lg text-gray-600">
          Our mission is to curate a collection of top-notch dog toys, accessories, and essentials that embody quality, safety, and fun. We understand the unique bond between humans and dogs, and that's why every product we offer is designed to enhance that bond.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <img src={aboutus} alt="About Us" className="w-full rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 hover:opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition-transform">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-gray-100 py-16 px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-8">
        <p className="text-lg text-gray-600 mb-8">
          Feel free to contact us with any questions or concerns you may have.
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Phone: 555-555-5555
          </li>
          <li className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l6 6-6 6"
              />
            </svg>
            Email: info@myecommercewebsite.com
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l6 6-6 6"
              />
            </svg>
            Address: 123 Main St, Anytown USA
          </li>
        </ul>
      </div>
      <div>
        <form action="">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="form-input w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              id="name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="form-input w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg text-gray-700">
              Message
            </label>
            <textarea
              className="form-textarea w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-transform"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-300 mb-2">Phone: 555-555-5555</p>
        <p className="text-gray-300 mb-2">Email: info@dogstore.com</p>
        <p className="text-gray-300">Address: 123 Dog Street, Pawsington</p>
      </div>
      <div className="mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-4">Links</h3>
        <ul className="list-none">
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Shop
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-instagram-square text-2xl"></i>
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-300 mb-4">
          Sign up for our newsletter to receive updates and special offers!
        </p>
        <form className="flex">
          <input
            type="email"
            className="form-input bg-gray-800 border-gray-600 focus:ring focus:ring-gray-400 rounded-l-md w-full px-4 py-2"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="mt-12 text-center">
      <p className="text-gray-400">&copy; 2023 DogStore. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Home;
