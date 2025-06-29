// Food category types
export type FoodCategory = 'bread_and_dairy' | 'bread_and_meat' | 'delivery' | 'ready_made' | 'simple_cooking';

// Interface for each food item
export interface Food {
  name: string;
  category: FoodCategory;
  prepTime: number; // preparation time in minutes
  description?: string;
}

// Complete list of quick foods
const quickFoods: Food[] = [
  // Bread and dairy
  { name: 'bread and cheese', category: 'bread_and_dairy', prepTime: 2, description: 'simple and quick' },
  { name: 'bread and cream', category: 'bread_and_dairy', prepTime: 2, description: 'tasty and nutritious' },
  { name: 'bread and butter', category: 'bread_and_dairy', prepTime: 1, description: 'classic and easy' },
  { name: 'bread and yogurt', category: 'bread_and_dairy', prepTime: 2, description: 'light and fresh' },
  
  // Bread and meat
  { name: 'bread and sausage', category: 'bread_and_meat', prepTime: 5, description: 'quick and energizing' },
  { name: 'bread and mortadella', category: 'bread_and_meat', prepTime: 3, description: 'ready and delicious' },
  { name: 'tuna sandwich', category: 'bread_and_meat', prepTime: 5, description: 'nutritious and healthy' },
  { name: 'ham sandwich', category: 'bread_and_meat', prepTime: 3, description: 'tasty and filling' },
  
  // Delivery orders
  { name: 'pizza', category: 'delivery', prepTime: 30, description: 'classic and popular' },
  { name: 'falafel', category: 'delivery', prepTime: 20, description: 'traditional and delicious' },
  { name: 'sandwich', category: 'delivery', prepTime: 15, description: 'quick and varied' },
  { name: 'kebab', category: 'delivery', prepTime: 25, description: 'authentic and hearty' },
  { name: 'burger', category: 'delivery', prepTime: 20, description: 'popular fast food' },
  { name: 'shawarma', category: 'delivery', prepTime: 15, description: 'middle eastern wrap' },
  
  // Ready-made foods
  { name: 'instant soup', category: 'ready_made', prepTime: 5, description: 'warm and easy' },
  { name: 'instant noodles', category: 'ready_made', prepTime: 5, description: 'filling and quick' },
  { name: 'canned beans', category: 'ready_made', prepTime: 3, description: 'nutritious and ready' },
  { name: 'cereal', category: 'ready_made', prepTime: 2, description: 'easy and accessible' },
  { name: 'yogurt', category: 'ready_made', prepTime: 1, description: 'healthy and instant' },
  
  // Simple cooking
  { name: 'boiled eggs', category: 'simple_cooking', prepTime: 10, description: 'protein rich and simple' },
  { name: 'scrambled eggs', category: 'simple_cooking', prepTime: 8, description: 'soft and tasty' },
  { name: 'fried eggs', category: 'simple_cooking', prepTime: 5, description: 'quick and satisfying' },
  { name: 'grilled cheese', category: 'simple_cooking', prepTime: 8, description: 'crispy and cheesy' },
  { name: 'pasta with butter', category: 'simple_cooking', prepTime: 12, description: 'simple and filling' },
  { name: 'rice with butter', category: 'simple_cooking', prepTime: 15, description: 'basic and comforting' }
];

// Class for managing quick food suggestions
export class QuickFoodSuggester {
  private foods: Food[];

  constructor(foodList: Food[] = quickFoods) {
    this.foods = foodList;
  }

  // Get a random food suggestion
  getRandomFood(): Food {
    const randomIndex = Math.floor(Math.random() * this.foods.length);
    return this.foods[randomIndex];
  }

  // Get random food by category
  getRandomFoodByCategory(category: FoodCategory): Food | null {
    const categoryFoods = this.foods.filter(food => food.category === category);
    if (categoryFoods.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * categoryFoods.length);
    return categoryFoods[randomIndex];
  }

  // Get foods by maximum prep time
  getFoodsByMaxTime(maxTime: number): Food[] {
    return this.foods.filter(food => food.prepTime <= maxTime);
  }

  // Get a random quick food (under 10 minutes)
  getRandomQuickFood(): Food {
    const quickFoods = this.getFoodsByMaxTime(10);
    const randomIndex = Math.floor(Math.random() * quickFoods.length);
    return quickFoods[randomIndex];
  }

  // Get all available foods
  getAllFoods(): Food[] {
    return [...this.foods];
  }

  // Get all categories
  getAllCategories(): FoodCategory[] {
    const categories = new Set(this.foods.map(food => food.category));
    return Array.from(categories);
  }
}

// Usage example
const foodSuggester = new QuickFoodSuggester();

// Main function to get food suggestion
export function suggestRandomFood() {
  const suggestion = foodSuggester.getRandomFood();
  return suggestion
}
