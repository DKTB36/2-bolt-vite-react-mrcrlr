import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sliders, Clock, Scale, UtensilsCrossed, Heart } from 'lucide-react';
import GoalSelector from './GoalSelector';
import ServingsSelector from './ServingsSelector';
import BudgetSelector from './BudgetSelector';
import DeliveryDaySelector from './DeliveryDaySelector';
import LoadingScreen from '../LoadingScreen';

const PreferencesForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    goal: '',
    dietaryRestrictions: [] as string[],
    adults: 2,
    kids: 0,
    cookingTime: 30,
    calorieTarget: 2000,
    allergies: [] as string[],
    cuisinePreferences: [] as string[],
    budget: 150,
    deliveryDay: 'monday'
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

  const handleReset = () => {
    setFormData({
      goal: '',
      dietaryRestrictions: [],
      adults: 2,
      kids: 0,
      cookingTime: 30,
      calorieTarget: 2000,
      allergies: [],
      cuisinePreferences: [],
      budget: 150,
      deliveryDay: 'monday'
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-md">
      <GoalSelector
        selectedGoal={formData.goal}
        onGoalChange={(goal) => setFormData(prev => ({ ...prev, goal }))}
      />

      <div>
        <div className="flex items-center gap-2 mb-4">
          <UtensilsCrossed className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Dietary Restrictions</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Select any dietary restrictions that apply to your meal plan.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {dietaryOptions.map(option => (
            <label key={option} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
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

      <ServingsSelector
        adults={formData.adults}
        kids={formData.kids}
        onAdultsChange={(adults) => setFormData(prev => ({ ...prev, adults }))}
        onKidsChange={(kids) => setFormData(prev => ({ ...prev, kids }))}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">Max Cooking Time</span>
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={formData.cookingTime}
              onChange={e => setFormData(prev => ({ ...prev, cookingTime: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">10 min</span>
              <span className="text-sm font-medium text-indigo-600">{formData.cookingTime} min</span>
              <span className="text-sm text-gray-500">120 min</span>
            </div>
            <p className="text-sm text-gray-500">Maximum time you want to spend cooking per meal</p>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">Daily Calories</span>
          </label>
          <div className="space-y-2">
            <input
              type="number"
              value={formData.calorieTarget}
              onChange={e => setFormData(prev => ({ ...prev, calorieTarget: parseInt(e.target.value) }))}
              min="1200"
              max="4000"
              step="50"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              aria-label="Daily calorie target"
            />
            <p className="text-sm text-gray-500">Recommended: 2000 calories per day for an average adult</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Allergies & Intolerances</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Select any allergies or intolerances to exclude from your meal plan.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {allergyOptions.map(option => (
            <label key={option} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
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
        <p className="text-sm text-gray-500 mb-4">Select your preferred cuisines to customize your meal suggestions.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cuisineOptions.map(option => (
            <label key={option} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
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

      <BudgetSelector
        budget={formData.budget}
        onBudgetChange={(budget) => setFormData(prev => ({ ...prev, budget }))}
      />

      <DeliveryDaySelector
        selectedDay={formData.deliveryDay}
        onDayChange={(day) => setFormData(prev => ({ ...prev, deliveryDay: day }))}
      />

      <div className="pt-6 flex gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Reset Form
        </button>
        <button
          type="submit"
          className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Generate Meal Plan
        </button>
      </div>
    </form>
  );
};

export default PreferencesForm;