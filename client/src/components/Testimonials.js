import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Verified Buyer",
    quote: "My dog absolutely loves the toys I got from Paws & Play! The quality is fantastic and they provide hours of entertainment.",
    rating: "4.5 Stars",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Add actual image URL here
  },
  {
    name: "Jane Smith",
    role: "Verified Buyer",
    quote: "The dog bed I purchased from Paws & Play exceeded my expectations. It's comfortable and my pup loves it!",
    rating: "5 Stars",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Add actual image URL here
  },
//   {
//     name: "Alex Johnson",
//     role: "Verified Buyer",
//     quote: "The selection of toys at Paws & Play is impressive. My dog loves every toy I've purchased from this store.",
//     rating: "4 Stars",
//     image: "https://randomuser.me/api/portraits/men/3.jpg", // Add actual image URL here
//   },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-2xl font-bold mb-8">What Our Customers Think About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image} // Use the image URL from the testimonial object
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
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
                <p className="text-yellow-500">{testimonial.rating}</p>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative p-6">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-100 to-gray-700/70 flex items-center justify-center transform transition-transform hover:scale-105 cursor-pointer">
              <p className="text-white text-lg font-thin relative group">
                See More Reviews
                <span className="ml-2">
                  <i className="fas fa-arrow-right text-gray-300"></i>
                </span>
              </p>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg" // Placeholder image
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
  );
};

export default Testimonials;