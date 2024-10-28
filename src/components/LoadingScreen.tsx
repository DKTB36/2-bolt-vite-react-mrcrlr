import React from 'react';
import { ChefHat } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <ChefHat className="w-16 h-16 text-indigo-600 mx-auto animate-bounce" />
        <h2 className="mt-4 text-xl font-semibold text-gray-900">Preparing Your Meal Plan</h2>
        <p className="mt-2 text-gray-600">Customizing recipes based on your preferences...</p>
        <div className="mt-4 w-32 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-indigo-600 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;