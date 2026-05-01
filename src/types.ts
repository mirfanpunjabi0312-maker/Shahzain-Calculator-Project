export type Category = 'Basic' | 'Health' | 'Math' | 'Finance' | 'Tech' | 'Education';

export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: Category;
  icon: string; // Lucide icon name
  seoContent?: string;
}

export interface CalculationHistory {
  id: string;
  calculatorId: string;
  calculatorName: string;
  timestamp: number;
  input: Record<string, any>;
  result: any;
}
