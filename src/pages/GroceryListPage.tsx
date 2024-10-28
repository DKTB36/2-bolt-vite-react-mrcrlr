import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, ArrowRight } from 'lucide-react';

interface GroceryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  alternatives: string[];
}

const GroceryListPage = () => {
  const navigate = useNavigate();
  const [groceryList, setGroceryList] = useState<GroceryItem[]>([
    {
      id: '1',
      name: 'Organic Rolled Oats',
      category: 'Grains',
      quantity: 1,
      unit: 'lb',
      alternatives: ['Steel Cut Oats', 'Quick Oats']
    },
    {
      id: '2',
      name: 'Fresh Berries Mix',
      category: 'Produce',
      quantity: 2,
      unit: 'cups',
      alternatives: ['Frozen Berry Mix', 'Mixed Fruit']
    },
    // Add more items based on selected recipes
  ]);

  const [preferences, setPreferences] = useState({
    organicOnly: false,
    preferredBrands: '',
    substituteAllowed: true
  });

  const handleQuantityChange = (id: string, change: number) => {
    setGroceryList(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const handleContinueToOrder = () => {
    navigate('/amazon-auth');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Grocery List</h1>
          <ShoppingCart className="w-8 h-8 text-indigo-600" />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Shopping Preferences</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={preferences.organicOnly}
                onChange={e => setPreferences(prev => ({ ...prev, organicOnly: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Prefer organic products when available</span>
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Brands (optional)
              </label>
              <input
                type="text"
                value={preferences.preferredBrands}
                onChange={e => setPreferences(prev => ({ ...prev, preferredBrands: e.target.value }))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter brand names, separated by commas"
              />
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={preferences.substituteAllowed}
                onChange={e => setPreferences(prev => ({ ...prev, substituteAllowed: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Allow substitutions with similar items</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {groceryList.map(item => (
              <div key={item.id} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-gray-900 min-w-[2rem] text-center">
                      {item.quantity} {item.unit}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {item.alternatives.length > 0 && (
                  <div className="text-sm text-gray-500">
                    Alternatives: {item.alternatives.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleContinueToOrder}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Continue to Amazon Order
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryListPage;