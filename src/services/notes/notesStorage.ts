import {storage} from '../storage';

import {Note} from './noteTypes';

const NOTE_KEY = '@Note';

async function set(note: Note[]): Promise<void> {
  await storage.setItem(NOTE_KEY, note);
}

async function get(): Promise<Note[] | null> {
  const note = await storage.getItem<Note[]>(NOTE_KEY);
  return note;
}

async function remove(): Promise<void> {
  await storage.removeItem(NOTE_KEY);
}

async function clear(): Promise<void> {
  await storage.clear();
}

export const noteStorage = {set, get, remove, clear};
