import React from 'react';
import RecipeCard from './RecipeCard';

interface DaySectionProps {
  day: string;
  meals: {
    type: string;
    recipe: {
      id: string;
      name: string;
      description: string;
      cookingTime: number;
      image: string;
      tags: string[];
      isSelected?: boolean;
    };
  }[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onView: (id: string) => void;
}

const DaySection: React.FC<DaySectionProps> = ({ day, meals, onAccept, onReject, onView }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{day}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map(({ type, recipe }) => (
          <div key={`${day}-${type}`}>
            <h3 className="text-lg font-medium text-gray-700 mb-3">{type}</h3>
            <RecipeCard
              recipe={recipe}
              onAccept={onAccept}
              onReject={onReject}
              onView={onView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySection;