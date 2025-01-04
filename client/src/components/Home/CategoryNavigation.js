// src/components/Home/CategoryNavigation.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../utils/queries'; // GraphQL query to fetch categories
import { Link } from 'react-router-dom';

const CategoryNavigation = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <p className="text-center text-lg text-gray-500">Loading categories...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Unable to load recommendations at this time.</p>;

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Discover Local Businesses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.categories.map((category, index) => (
          <div key={category.id || index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link to={`/category/${category.id}`} className="block">
              <img src={category.imageURL} alt={category.categoryName} className="w-full h-32 rounded-t-lg object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{category.categoryName}</h3>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                <p className="text-xs text-gray-500 mt-1">{category.address}</p>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  Explore Options
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavigation;