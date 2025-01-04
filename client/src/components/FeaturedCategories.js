import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Gift Cards', image: 'https://picsum.photos/200/200?image=1011' },
  { name: 'Toys', image: 'https://picsum.photos/200/200?image=1012' },
  { name: 'Accessories', image: 'https://picsum.photos/200/200?image=1013' },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-600">Featured Categories</h2>
        <div className="flex justify-center gap-8 mt-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-lg p-4">
              <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{category.name}</h3>
              <Link to={`/category/${category.name.toLowerCase()}`} className="text-blue-500 hover:underline">Shop Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;