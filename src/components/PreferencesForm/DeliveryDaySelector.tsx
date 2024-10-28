import React from 'react';
import { Calendar } from 'lucide-react';

interface DeliveryDaySelectorProps {
  selectedDay: string;
  onDayChange: (day: string) => void;
}

const deliveryDays = [
  { id: 'monday', label: 'Monday' },
  { id: 'tuesday', label: 'Tuesday' },
  { id: 'wednesday', label: 'Wednesday' },
  { id: 'thursday', label: 'Thursday' },
  { id: 'friday', label: 'Friday' },
  { id: 'saturday', label: 'Saturday' },
  { id: 'sunday', label: 'Sunday' }
];

const DeliveryDaySelector: React.FC<DeliveryDaySelectorProps> = ({ selectedDay, onDayChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Preferred Delivery Day</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Choose your preferred day for grocery delivery.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {deliveryDays.map(day => (
          <button
            key={day.id}
            onClick={() => onDayChange(day.id)}
            className={`p-4 rounded-lg border-2 transition-all text-center ${
              selectedDay === day.id
                ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-200'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
            type="button"
          >
            <span className="font-medium text-gray-900">{day.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeliveryDaySelector;