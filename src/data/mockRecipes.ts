export const mockRecipes = {
  Monday: [
    {
      type: 'Breakfast',
      recipe: {
        id: 'mon-breakfast',
        name: 'Protein-Packed Overnight Oats',
        description: 'High-protein, gluten-free breakfast with fresh berries and chia seeds',
        cookingTime: 15,
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['High-Protein', 'Gluten-Free'],
        calories: 350,
        protein: 20,
        carbs: 45,
        fat: 12
      }
    },
    {
      type: 'Lunch',
      recipe: {
        id: 'mon-lunch',
        name: 'Mediterranean Quinoa Bowl',
        description: 'Fresh quinoa bowl with grilled chicken, feta, and vegetables',
        cookingTime: 25,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['High-Protein', 'Mediterranean'],
        calories: 450,
        protein: 35,
        carbs: 55,
        fat: 15
      }
    },
    {
      type: 'Dinner',
      recipe: {
        id: 'mon-dinner',
        name: 'Grilled Salmon with Asparagus',
        description: 'Wild-caught salmon with roasted asparagus and quinoa',
        cookingTime: 30,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['Omega-3', 'Low-Carb'],
        calories: 520,
        protein: 45,
        carbs: 30,
        fat: 28
      }
    }
  ],
  Tuesday: [
    {
      type: 'Breakfast',
      recipe: {
        id: 'tue-breakfast',
        name: 'Green Smoothie Bowl',
        description: 'Nutrient-rich smoothie bowl with spinach, banana, and granola',
        cookingTime: 10,
        image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['Vegan', 'Gluten-Free'],
        calories: 310,
        protein: 15,
        carbs: 52,
        fat: 8
      }
    },
    {
      type: 'Lunch',
      recipe: {
        id: 'tue-lunch',
        name: 'Turkey Avocado Wrap',
        description: 'Whole grain wrap with turkey, avocado, and fresh vegetables',
        cookingTime: 15,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['High-Protein', 'Healthy-Fats'],
        calories: 420,
        protein: 32,
        carbs: 38,
        fat: 22
      }
    },
    {
      type: 'Dinner',
      recipe: {
        id: 'tue-dinner',
        name: 'Vegetarian Buddha Bowl',
        description: 'Colorful bowl with roasted chickpeas, sweet potato, and tahini dressing',
        cookingTime: 35,
        image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        tags: ['Vegetarian', 'High-Fiber'],
        calories: 480,
        protein: 18,
        carbs: 65,
        fat: 20
      }
    }
  ]
};

export const mockWeeklyTotals = {
  calories: 2200,
  protein: 120,
  carbs: 250,
  fat: 70
};