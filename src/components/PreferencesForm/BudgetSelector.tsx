import React from 'react';
import { DollarSign } from 'lucide-react';

interface BudgetSelectorProps {
  budget: number;
  onBudgetChange: (value: number) => void;
}

const BudgetSelector: React.FC<BudgetSelectorProps> = ({ budget, onBudgetChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Weekly Budget</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Set your weekly grocery budget to help us suggest recipes within your price range.</p>
      <div className="space-y-4">
        <input
          type="range"
          min="50"
          max="300"
          step="10"
          value={budget}
          onChange={(e) => onBudgetChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          aria-label="Weekly budget range"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">$50</span>
          <span className="text-lg font-medium text-indigo-600">${budget}</span>
          <span className="text-sm text-gray-500">$300</span>
        </div>
        <p className="text-sm text-gray-500">
          We'll optimize your meal plan to fit within this budget while maintaining nutritional value.
        </p>
      </div>
    </div>
  );
};

export default BudgetSelector;