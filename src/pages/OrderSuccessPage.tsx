import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { confirmationNumber } = location.state || { confirmationNumber: 'Unknown' };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Order Confirmed!
        </h2>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Your confirmation number</p>
          <p className="mt-1 text-2xl font-mono text-indigo-600">{confirmationNumber}</p>
        </div>
        <p className="mt-4 text-gray-600">
          You will receive an email confirmation with order details and tracking information.
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;