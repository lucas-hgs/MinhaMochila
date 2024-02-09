export interface Note {
  id: string;
  title: string;
  description: string;
}

export interface NotesService {
  note: Note | null;
  saveNote: (note: Note) => Promise<void>;
  removeNote: () => Promise<void>;
  isLoading: boolean;
}
