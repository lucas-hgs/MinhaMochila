import {create} from 'zustand';

import {NotesService} from './noteTypes';

const useNoteStore = create<NotesService>(set => ({
  note: null,
  saveNote: async note => set({note}),
  removeNote: async () => {},
  isLoading: true,
}));

export function useNoteZustand(): NotesService['note'] {
  return useNoteStore(state => state.note);
}

export function useNoteServiceZustand(): Pick<
  NotesService,
  'saveNote' | 'removeNote' | 'note'
> {
  const saveNote = useNoteStore(state => state.saveNote);
  const removeNote = useNoteStore(state => state.removeNote);
  const note = useNoteStore(state => state.note);

  return {
    saveNote,
    removeNote,
    note,
  };
}
