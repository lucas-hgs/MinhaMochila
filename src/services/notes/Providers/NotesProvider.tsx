import React, {createContext, useEffect, useState} from 'react';

import {noteStorage} from '../notesStorage';
import {Note, NotesService} from '../noteTypes';

export const NotesContext = createContext<NotesService>({
  note: null,
  isLoading: true,
  removeNote: async () => {},
  saveNote: async () => {},
});

export function NotesProvider({children}: React.PropsWithChildren<{}>) {
  const [note, setNote] = useState<Note[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startNotes();
  }, []);

  async function startNotes() {
    try {
      const nt = await noteStorage.get();
      if (nt) {
        setNote(nt);
      }
    } catch (error) {
      // TODO
    } finally {
      setIsLoading(false);
    }
  }

  async function saveNote(nt: Note[]): Promise<void> {
    noteStorage.set(nt);
    setNote(nt);
    startNotes();
  }

  async function removeNote(): Promise<void> {
    noteStorage.remove();
    setNote(null);
  }

  return (
    <NotesContext.Provider
      value={{
        note,
        isLoading,
        saveNote,
        removeNote,
      }}>
      {children}
    </NotesContext.Provider>
  );
}
