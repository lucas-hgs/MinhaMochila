import {NotesService} from './noteTypes';
import {useNoteServiceZustand, useNoteZustand} from './useNoteZustand';

export function useNote(): NotesService['note'] {
  return useNoteZustand();
}

export function useNoteService(): Pick<
  NotesService,
  'saveNote' | 'removeNote' | 'note'
> {
  return useNoteServiceZustand();
}
