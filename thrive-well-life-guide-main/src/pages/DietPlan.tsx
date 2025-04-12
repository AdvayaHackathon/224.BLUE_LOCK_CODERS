
import { useState } from 'react';
import { Apple, Beef, Egg, Fish, Leaf, Utensils } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FoodItem {
  name: string;
  nutrients: string;
  benefit: string;
  icon: React.ReactNode;
}

interface MealPlan {
  title: string;
  description: string;
  foods: FoodItem[];
}

const DietPlan = () => {
  const [mealDay, setMealDay] = useState('today');

  // Sample meal plans based on "uploaded" blood report analysis
  const mealPlans: Record<string, MealPlan[]> = {
    today: [
      {
        title: 'Breakfast',
        description: 'High iron and protein to boost morning energy',
        foods: [
          {
            name: 'Spinach Omelette',
            nutrients: 'Iron, Protein, Vitamins A, C, K',
            benefit: 'Helps with iron deficiency and protein needs',
            icon: <Egg size={18} className="text-nutrition-500" />
          },
          {
            name: 'Oatmeal with Berries',
            nutrients: 'Fiber, Antioxidants, Iron',
            benefit: 'Supports digestion and provides steady energy',
            icon: <Apple size={18} className="text-red-500" />
          },
          {
            name: 'Orange Juice with Vitamin C',
            nutrients: 'Vitamin C, Antioxidants',
            benefit: 'Enhances iron absorption',
            icon: <Apple size={18} className="text-orange-500" />
          }
        ]
      },
      {
        title: 'Lunch',
        description: 'Balanced nutrition for sustained afternoon performance',
        foods: [
          {
            name: 'Grilled Salmon',
            nutrients: 'Omega-3 Fatty Acids, Protein, Vitamin D',
            benefit: 'Supports heart health and vitamin D levels',
            icon: <Fish size={18} className="text-blue-500" />
          },
          {
            name: 'Quinoa Salad',
            nutrients: 'Complete Protein, Iron, Magnesium',
            benefit: 'Provides essential minerals and plant protein',
            icon: <Leaf size={18} className="text-wellness-500" />
          },
          {
            name: 'Steamed Broccoli',
            nutrients: 'Vitamin C, K, Folate, Fiber',
            benefit: 'Supports iron absorption and digestion',
            icon: <Leaf size={18} className="text-green-600" />
          }
        ]
      },
      {
        title: 'Dinner',
        description: 'Nutrient-rich evening meal promoting recovery and sleep',
        foods: [
          {
            name: 'Lean Beef Stir Fry',
            nutrients: 'High-quality Iron, Zinc, B vitamins',
            benefit: 'Addresses iron deficiency directly',
            icon: <Beef size={18} className="text-red-700" />
          },
          {
            name: 'Brown Rice',
            nutrients: 'Complex Carbs, Fiber, Magnesium',
            benefit: 'Provides sustainable energy and supports sleep',
            icon: <Utensils size={18} className="text-yellow-700" />
          },
          {
            name: 'Kale and Bell Peppers',
            nutrients: 'Vitamins A, C, K, Iron',
            benefit: 'Enhances iron absorption with vitamin C',
            icon: <Leaf size={18} className="text-green-500" />
          }
        ]
      }
    ],
    tomorrow: [
      {
        title: 'Breakfast',
        description: 'Vitamin D and calcium focus',
        foods: [
          {
            name: 'Greek Yogurt with Almonds',
            nutrients: 'Calcium, Protein, Vitamin D, Healthy Fats',
            benefit: 'Supports bone health and vitamin D levels',
            icon: <Utensils size={18} className="text-blue-500" />
          },
          {
            name: 'Fortified Cereal',
            nutrients: 'Iron, Folate, B-vitamins',
            benefit: 'Provides additional iron in an easily digested form',
            icon: <Utensils size={18} className="text-yellow-500" />
          }
        ]
      },
      {
        title: 'Lunch',
        description: 'Iron-rich meal with absorption enhancers',
        foods: [
          {
            name: 'Lentil Soup',
            nutrients: 'Plant Iron, Protein, Folate',
            benefit: 'Excellent plant source of iron',
            icon: <Utensils size={18} className="text-nutrition-500" />
          },
          {
            name: 'Citrus Salad',
            nutrients: 'Vitamin C, Antioxidants',
            benefit: 'Promotes iron absorption from the lentils',
            icon: <Apple size={18} className="text-yellow-500" />
          }
        ]
      },
      {
        title: 'Dinner',
        description: 'Complete proteins with mineral-rich sides',
        foods: [
          {
            name: 'Baked Chicken',
            nutrients: 'Protein, B-vitamins, Iron',
            benefit: 'Lean protein source with easily absorbable iron',
            icon: <Utensils size={18} className="text-red-500" />
          },
          {
            name: 'Sweet Potato',
            nutrients: 'Vitamin A, Fiber, Potassium',
            benefit: 'Supports immune function and digestion',
            icon: <Apple size={18} className="text-orange-600" />
          },
          {
            name: 'Sauteed Spinach with Garlic',
            nutrients: 'Iron, Vitamins A, C, K',
            benefit: 'Iron-rich green vegetable for blood health',
            icon: <Leaf size={18} className="text-green-600" />
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Your Personalized Diet Plan</h1>
          <p className="text-gray-600">
            Based on your blood report analysis, we've crafted a nutrition plan 
            focusing on iron-rich foods and vitamin D supplements to address your 
            specific health needs.
          </p>
        </div>
        
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              <Utensils size={18} className="text-yellow-600" />
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800">Dietary Focus Areas</h4>
              <ul className="mt-2 space-y-2 text-sm text-yellow-800">
                <li className="flex items-center">
                  <span className="bg-yellow-200 h-1.5 w-1.5 rounded-full mr-2"></span>
                  <span>Increase iron intake to address mild anemia</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-200 h-1.5 w-1.5 rounded-full mr-2"></span>
                  <span>Boost vitamin D through diet and sensible sun exposure</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-200 h-1.5 w-1.5 rounded-full mr-2"></span>
                  <span>Include vitamin C with meals to enhance iron absorption</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-200 h-1.5 w-1.5 rounded-full mr-2"></span>
                  <span>Maintain omega-3 fatty acids for heart health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Tabs defaultValue="today" value={mealDay} onValueChange={setMealDay}>
          <TabsList className="mb-6">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
          </TabsList>
          
          {Object.entries(mealPlans).map(([day, meals]) => (
            <TabsContent key={day} value={day} className="space-y-6">
              {meals.map((meal, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{meal.title}</CardTitle>
                    <p className="text-gray-500 text-sm">{meal.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {meal.foods.map((food, i) => (
                        <div key={i} className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center mr-3">
                            {food.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{food.name}</h4>
                            <p className="text-xs text-gray-500 mb-1">{food.nutrients}</p>
                            <p className="text-sm text-gray-600">{food.benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Recommended Supplements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <h4 className="font-medium mb-2">Vitamin D3 (2000 IU daily)</h4>
            <p className="text-sm text-gray-600">
              Your blood report shows insufficient vitamin D levels. 
              Take with a meal containing healthy fats for optimal absorption.
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg">
            <h4 className="font-medium mb-2">Iron Bisglycinate (25mg daily)</h4>
            <p className="text-sm text-gray-600">
              This gentle form of iron helps address your deficiency with fewer digestive side effects. 
              Take with vitamin C for better absorption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
