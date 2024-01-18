import {z} from 'zod';

export const newNoteSchema = z.object({
  title: z.string().min(1, 'Título muito curto').max(25, 'Título muito longo'),
  description: z.string().min(1, 'Nota muito curta'),
});

export type NewNoteSchema = z.infer<typeof newNoteSchema>;
