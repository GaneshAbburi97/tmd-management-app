export interface CBTModule {
  id: string;
  title: string;
  category: 'breathing' | 'stress' | 'coping' | 'sleep' | 'mindfulness';
  content: string;
}
