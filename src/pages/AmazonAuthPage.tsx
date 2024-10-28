import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, ShoppingBag } from 'lucide-react';

const AmazonAuthPage = () => {
  const navigate = useNavigate();

  const handleAmazonLogin = () => {
    // In a real app, this would integrate with Amazon's OAuth
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Connect with Amazon
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your Amazon account to complete your grocery order
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={handleAmazonLogin}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF9900] hover:bg-[#FF9900]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Sign in with Amazon
          </button>
          <p className="mt-4 text-xs text-gray-500 text-center">
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazonAuthPage;