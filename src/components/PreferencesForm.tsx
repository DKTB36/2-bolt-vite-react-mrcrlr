import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sliders, Users, Clock, Scale, UtensilsCrossed, Heart } from 'lucide-react';
import LoadingScreen from './LoadingScreen';

const PreferencesForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    dietaryRestrictions: [] as string[],
    servings: 2,
    cookingTime: 30,
    calorieTarget: 2000,
    allergies: [] as string[],
    cuisinePreferences: [] as string[]
  });

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-Free',
    'Dairy-Free', 'Keto', 'Paleo', 'Low-Carb'
  ];

  const allergyOptions = [
    'Nuts', 'Shellfish', 'Eggs', 'Soy',
    'Milk', 'Wheat', 'Fish', 'Peanuts'
  ];

  const cuisineOptions = [
    'Italian', 'Mexican', 'Japanese', 'Indian',
    'Mediterranean', 'Thai', 'American', 'Chinese'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    navigate('/suggestions');
  };

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-md">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <UtensilsCrossed className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Dietary Restrictions</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {dietaryOptions.map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.dietaryRestrictions.includes(option)}
                onChange={() => handleCheckboxChange('dietaryRestrictions', option)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">Servings</span>
          </label>
          <input
            type="number"
            value={formData.servings}
            onChange={e => setFormData(prev => ({ ...prev, servings: parseInt(e.target.value) }))}
            min="1"
            max="10"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">Max Cooking Time (min)</span>
          </label>
          <input
            type="number"
            value={formData.cookingTime}
            onChange={e => setFormData(prev => ({ ...prev, cookingTime: parseInt(e.target.value) }))}
            min="10"
            max="120"
            step="5"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">Daily Calories</span>
          </label>
          <input
            type="number"
            value={formData.calorieTarget}
            onChange={e => setFormData(prev => ({ ...prev, calorieTarget: parseInt(e.target.value) }))}
            min="1200"
            max="4000"
            step="50"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Allergies & Intolerances</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {allergyOptions.map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.allergies.includes(option)}
                onChange={() => handleCheckboxChange('allergies', option)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Cuisine Preferences</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cuisineOptions.map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.cuisinePreferences.includes(option)}
                onChange={() => handleCheckboxChange('cuisinePreferences', option)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Generate Meal Plan
        </button>
      </div>
    </form>
  );
};

export default PreferencesForm;