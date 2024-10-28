import React from 'react';
import { Target } from 'lucide-react';

interface GoalSelectorProps {
  selectedGoal: string;
  onGoalChange: (goal: string) => void;
}

const goals = [
  { 
    id: 'longevity', 
    label: 'Longevity', 
    description: 'Focus on foods that promote a longer, healthier life'
  },
  { 
    id: 'muscle-gain', 
    label: 'Muscle Gain', 
    description: 'High-protein meals to support muscle growth'
  },
  { 
    id: 'weight-loss', 
    label: 'Weight Loss', 
    description: 'Balanced, calorie-conscious meals'
  },
  { 
    id: 'quick-easy', 
    label: 'Quick & Easy', 
    description: 'Simple recipes ready in 30 minutes or less'
  },
  { 
    id: 'heart-health', 
    label: 'Heart Health', 
    description: 'Heart-healthy ingredients and cooking methods'
  },
  { 
    id: 'sustainable', 
    label: 'Sustainable Eating', 
    description: 'Environmentally conscious meal choices'
  }
];

const GoalSelector: React.FC<GoalSelectorProps> = ({ selectedGoal, onGoalChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Your Goal</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Select a primary goal for your meal plan to help us tailor recipes to your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map(goal => (
          <button
            key={goal.id}
            onClick={() => onGoalChange(goal.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedGoal === goal.id
                ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-200'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
            type="button"
          >
            <h3 className="font-medium text-gray-900 mb-1">{goal.label}</h3>
            <p className="text-sm text-gray-500">{goal.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoalSelector;