import {z} from 'zod';

export const newActivitySchema = z.object({
  title: z.string().min(1, 'Título muito curto').max(20, 'Título muito longo'),
  description: z
    .string()
    .min(1, 'Descrição muito curta')
    .max(20, 'Descrição muito longa'),
  id: z.string(),
  date: z.object({
    fullDate: z.string(),
    hours: z.string(),
  }),
});

export type NewActivitySchema = z.infer<typeof newActivitySchema>;
