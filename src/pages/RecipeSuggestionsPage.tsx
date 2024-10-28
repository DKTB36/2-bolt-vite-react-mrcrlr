import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check, RefreshCw } from 'lucide-react';
import DaySection from '../components/RecipeSuggestions/DaySection';
import NutritionalOverview from '../components/RecipeSuggestions/NutritionalOverview';
import Filters from '../components/RecipeSuggestions/Filters';
import { mockRecipes, mockWeeklyTotals } from '../data/mockRecipes';

const RecipeSuggestionsPage = () => {
  const navigate = useNavigate();
  const [selectedMealType, setSelectedMealType] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');
  const [recipes, setRecipes] = useState(mockRecipes);
  const [acceptedRecipes, setAcceptedRecipes] = useState<string[]>([]);

  const handleAccept = (recipeId: string) => {
    setAcceptedRecipes(prev => [...prev, recipeId]);
  };

  const handleReject = (recipeId: string) => {
    // In a real app, this would fetch a new recipe suggestion
    console.log('Requesting new recipe to replace:', recipeId);
  };

  const handleView = (recipeId: string) => {
    // In a real app, this would open a modal or navigate to a detailed view
    console.log('Viewing recipe details:', recipeId);
  };

  const handleAcceptAll = () => {
    const allRecipeIds = Object.values(recipes).flatMap(dayMeals => 
      dayMeals.map(meal => meal.recipe.id)
    );
    setAcceptedRecipes(allRecipeIds);
  };

  const handleReset = () => {
    setAcceptedRecipes([]);
    // In a real app, this would also fetch new recipe suggestions
  };

  const filteredRecipes = Object.entries(recipes).reduce((acc, [day, meals]) => {
    if (selectedDay !== 'All' && day !== selectedDay) return acc;
    
    const filteredMeals = meals.filter(meal => 
      selectedMealType === 'All' || meal.type === selectedMealType
    );
    
    if (filteredMeals.length > 0) {
      acc[day] = filteredMeals;
    }
    
    return acc;
  }, {} as typeof recipes);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Preferences
          </button>
          <button
            onClick={() => navigate('/grocery-list')}
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            View Grocery List
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Weekly Meal Plan</h1>
          <p className="text-lg text-gray-600">
            Personalized recipes for every meal, tailored to your preferences
          </p>
        </div>

        <NutritionalOverview weeklyTotals={mockWeeklyTotals} />

        <div className="my-8">
          <Filters
            selectedMealType={selectedMealType}
            selectedDay={selectedDay}
            onMealTypeChange={setSelectedMealType}
            onDayChange={setSelectedDay}
          />
        </div>

        {Object.entries(filteredRecipes).map(([day, meals]) => (
          <DaySection
            key={day}
            day={day}
            meals={meals.map(meal => ({
              ...meal,
              recipe: {
                ...meal.recipe,
                isSelected: acceptedRecipes.includes(meal.recipe.id)
              }
            }))}
            onAccept={handleAccept}
            onReject={handleReject}
            onView={handleView}
          />
        ))}

        <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
          <button
            onClick={handleReset}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Reset Plan
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Check className="w-5 h-5 mr-2" />
            Accept All Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestionsPage;