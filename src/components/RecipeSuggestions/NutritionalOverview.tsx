import React from 'react';

interface NutritionalOverviewProps {
  weeklyTotals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const NutritionalOverview: React.FC<NutritionalOverviewProps> = ({ weeklyTotals }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Nutritional Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-indigo-50 rounded-lg">
          <div className="text-2xl font-bold text-indigo-700">{weeklyTotals.calories}</div>
          <div className="text-sm text-gray-600">Calories/day</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-700">{weeklyTotals.protein}g</div>
          <div className="text-sm text-gray-600">Protein/day</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-700">{weeklyTotals.carbs}g</div>
          <div className="text-sm text-gray-600">Carbs/day</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-700">{weeklyTotals.fat}g</div>
          <div className="text-sm text-gray-600">Fat/day</div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalOverview;