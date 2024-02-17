import {z} from 'zod';

export const editNoteSchema = z.object({
  title: z.string().min(1, 'Título muito curto').max(25, 'Título muito longo'),
  description: z.string().min(1, 'Nota muito curta'),
  id: z.string(),
});

export type EditNoteSchema = z.infer<typeof editNoteSchema>;
