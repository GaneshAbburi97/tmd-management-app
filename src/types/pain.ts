export type PainSeverity = 'mild' | 'moderate' | 'severe';

export interface PainPoint {
  id: string;
  label: string;
  intensity: number;
}

export interface PainRecord {
  id: string;
  intensity: number;
  triggers: string[];
  notes?: string;
  points: PainPoint[];
  createdAt: string;
}
