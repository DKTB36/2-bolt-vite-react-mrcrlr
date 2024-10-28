import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Truck, Calendar, CreditCard } from 'lucide-react';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    deliveryDate: '',
    address: '',
    paymentMethod: ''
  });

  const handleConfirmOrder = () => {
    // In a real app, this would submit the order to Amazon's API
    const confirmationNumber = 'AMZ' + Math.random().toString(36).substr(2, 9).toUpperCase();
    navigate('/order-success', { state: { confirmationNumber } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Confirm Your Order</h1>
          <p className="mt-2 text-gray-600">Review and confirm your grocery delivery details</p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-5 h-5 inline-block mr-2" />
                Delivery Date
              </label>
              <select
                value={orderDetails.deliveryDate}
                onChange={e => setOrderDetails(prev => ({ ...prev, deliveryDate: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select a delivery date</option>
                <option value="tomorrow">Tomorrow, 9am - 11am</option>
                <option value="next-day">Day After Tomorrow, 2pm - 4pm</option>
                <option value="later">Later This Week</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Truck className="w-5 h-5 inline-block mr-2" />
                Delivery Address
              </label>
              <select
                value={orderDetails.address}
                onChange={e => setOrderDetails(prev => ({ ...prev, address: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select a delivery address</option>
                <option value="home">Home Address</option>
                <option value="work">Work Address</option>
                <option value="other">Add New Address</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <CreditCard className="w-5 h-5 inline-block mr-2" />
                Payment Method
              </label>
              <select
                value={orderDetails.paymentMethod}
                onChange={e => setOrderDetails(prev => ({ ...prev, paymentMethod: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select a payment method</option>
                <option value="card1">Visa ending in 1234</option>
                <option value="card2">Mastercard ending in 5678</option>
                <option value="new">Add New Payment Method</option>
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">$84.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="text-gray-900">$5.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$7.65</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">$98.63</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleConfirmOrder}
              disabled={!orderDetails.deliveryDate || !orderDetails.address || !orderDetails.paymentMethod}
              className="w-full flex justify-center items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <Check className="w-5 h-5 mr-2" />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;