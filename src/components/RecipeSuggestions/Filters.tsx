import React from 'react';

interface FiltersProps {
  selectedMealType: string;
  selectedDay: string;
  onMealTypeChange: (type: string) => void;
  onDayChange: (day: string) => void;
}

const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];
const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Filters: React.FC<FiltersProps> = ({
  selectedMealType,
  selectedDay,
  onMealTypeChange,
  onDayChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meal Type
        </label>
        <select
          value={selectedMealType}
          onChange={(e) => onMealTypeChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {mealTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Day
        </label>
        <select
          value={selectedDay}
          onChange={(e) => onDayChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {days.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;