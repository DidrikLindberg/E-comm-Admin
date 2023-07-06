import React from 'react';
import { Link } from 'react-router-dom';
import productimg from '../assets/images/PartyTentBlack.png';
import BlackCanopy from '../assets/images/BlackCanopy1.jpg';
import WhitePartyTent from '../assets/images/WhitePartyTent.jpg';
import BannerImg from '../assets/images/Banner.jpg';

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Prepare For Your Next Fesival with Us!</h1>
              <p className="text-lg text-gray-600 mb-8">Shop our collection of Party Tents, Canopies, and other camping gear you might need.</p>
              <Link to="/shopping" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="lg:w-1/2">
              <img src= {BannerImg} alt="Banner" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card w-64 h-64">
              <div className="relative w-full h-full">
                <img
                  src={BlackCanopy}
                  alt="Product"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Running Shoes</h5>
                <p className="card-text">Price: $75.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
           <div className="card w-64 h-64">
              <div className="relative w-full h-full">
                <img
                  src={productimg}
                  alt="Product"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Running Shoes</h5>
                <p className="card-text">Price: $75.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
            <div className="card w-64 h-64">
              <div className="relative w-full h-full">
                <img
                  src={WhitePartyTent}
                  alt="Product"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Running Shoes</h5>
                <p className="card-text">Price: $75.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Us</h2>
              <p className="text-lg text-gray-600 mb-4">We are a small online retailer specializing in casual clothing and accessories. Our mission is to provide high quality products at affordable prices.</p>
              <p className="text-lg text-gray-600">Our team is dedicated to providing excellent customer service and we are always happy to answer any questions you may have.</p>
            </div>
            <div className="lg:w-1/2">
              <img src="https://dummyimage.com/600x400/000/fff" alt="About Image" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact Us</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8">
              <p className="text-lg text-gray-600 mb-8">Feel free to contact us with any questions or concerns you may have.</p>
              <ul className="list-unstyled">
                <li>Phone: 555-555-5555</li>
                <li>Email: info@myecommercewebsite.com</li>
                <li>Address: 123 Main St, Anytown USA</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <form action="">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
                  <input type="text" className="form-input w-full" id="name" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
                  <input type="email" className="form-input w-full" id="email" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
                  <textarea className="form-textarea w-full" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
