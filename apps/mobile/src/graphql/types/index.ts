export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  instructions: string[];
  metadata: {
    equipment: string[];
    difficulty: string;
  };
}

export interface MuscleGroup {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  metadata: {
    aliases: string[];
    category: string;
  };
}
