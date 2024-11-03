import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-600 shadow-md">
      <div className="container mx-auto flex items-center py-4 px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white mr-10">
          Inventar
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link 
              className="text-white text-lg hover:bg-white hover:text-blue-600 px-3 py-2 rounded transition duration-300 ease-in-out" 
              to="/products"
            >
              Products
            </Link>          
          </li>
          <li>
            <Link 
              className="text-white text-lg hover:bg-white hover:text-blue-600 px-3 py-2 rounded transition duration-300 ease-in-out" 
              to="/categories"
            >
              Categories
            </Link>          
          </li>
          <li>
            <Link 
              className="text-white text-lg hover:bg-white hover:text-blue-600 px-3 py-2 rounded transition duration-300 ease-in-out" 
              to="/suppliers"
            >
              Suppliers
            </Link>          
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
