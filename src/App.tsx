import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreferencesForm from './components/PreferencesForm';
import RecipeSuggestionsPage from './pages/RecipeSuggestionsPage';
import GroceryListPage from './pages/GroceryListPage';
import AmazonAuthPage from './pages/AmazonAuthPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { ChefHat } from 'lucide-react';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <ChefHat className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Personalize Your Weekly Meal Plan
                  </h1>
                  <p className="text-lg text-gray-600">
                    Tell us about your preferences to create your perfect meal plan
                  </p>
                </div>
                <PreferencesForm />
              </div>
            </div>
          }
        />
        <Route path="/suggestions" element={<RecipeSuggestionsPage />} />
        <Route path="/grocery-list" element={<GroceryListPage />} />
        <Route path="/amazon-auth" element={<AmazonAuthPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;