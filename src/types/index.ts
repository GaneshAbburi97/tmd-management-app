export * from './auth';
export * from './pain';
export * from './exercise';
export * from './cbt';
export * from './mood';
export * from './appointment';
export * from './api';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  onboardingCompleted: boolean;
  medicalHistory?: string;
  symptomSeverity?: number;
}
