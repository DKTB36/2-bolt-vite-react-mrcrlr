import React from 'react';
import { Users } from 'lucide-react';

interface ServingsSelectorProps {
  adults: number;
  kids: number;
  onAdultsChange: (value: number) => void;
  onKidsChange: (value: number) => void;
}

const ServingsSelector: React.FC<ServingsSelectorProps> = ({
  adults,
  kids,
  onAdultsChange,
  onKidsChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Servings</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Specify the number of people you're cooking for to adjust portion sizes accordingly.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Adults
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={adults}
            onChange={(e) => onAdultsChange(parseInt(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            aria-label="Number of adults"
          />
          <p className="text-sm text-gray-500">Standard adult portion sizes</p>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Kids
          </label>
          <input
            type="number"
            min="0"
            max="10"
            value={kids}
            onChange={(e) => onKidsChange(parseInt(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            aria-label="Number of kids"
          />
          <p className="text-sm text-gray-500">Adjusted portion sizes for children</p>
        </div>
      </div>
    </div>
  );
};

export default ServingsSelector;