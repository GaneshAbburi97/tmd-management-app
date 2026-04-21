import * as yup from 'yup';
import { z } from 'zod';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const moodEntrySchema = z.object({
  mood: z.string().min(1),
  stressLevel: z.number().min(1).max(10),
  anxietyLevel: z.number().min(1).max(10),
});
