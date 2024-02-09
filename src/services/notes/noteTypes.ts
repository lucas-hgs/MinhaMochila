import {Note} from '@domain';

export interface NotesService {
  note: Note | null;
  saveNote: (note: Note) => Promise<void>;
  removeNote: () => Promise<void>;
  isLoading: boolean;
}
