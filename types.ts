
export interface Flavor {
  id: string;
  name: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
}

export interface Recommendation {
  flavorName: string;
  reasoning: string;
  ingredients: string[];
  visualDescription: string;
}
