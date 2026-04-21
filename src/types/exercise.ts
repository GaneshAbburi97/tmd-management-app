export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  durationSeconds: number;
  difficulty: ExerciseDifficulty;
  instructions: string[];
}
