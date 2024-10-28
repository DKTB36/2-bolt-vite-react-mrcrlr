import React from 'react';
import { Clock, Check, RefreshCw, ChevronRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    description: string;
    cookingTime: number;
    image: string;
    tags: string[];
    isSelected?: boolean;
  };
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onView: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onAccept, onReject, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="w-4 h-4 mr-1" />
          <span>{recipe.cookingTime} min</span>
        </div>

        <div className="flex gap-2">
          {recipe.isSelected ? (
            <button 
              className="flex items-center justify-center w-full py-2 px-4 bg-green-50 text-green-700 rounded-md"
              disabled
            >
              <Check className="w-4 h-4 mr-1" />
              Selected
            </button>
          ) : (
            <>
              <button 
                onClick={() => onAccept(recipe.id)}
                className="flex-1 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(recipe.id)}
                className="p-2 text-gray-600 hover:text-gray-800 border rounded-md"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </>
          )}
          <button
            onClick={() => onView(recipe.id)}
            className="p-2 text-gray-600 hover:text-gray-800 border rounded-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;