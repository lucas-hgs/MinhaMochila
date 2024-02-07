import {Note} from '@domain';

import {storage} from '../storage';

const NOTE_KEY = '@Note';

async function set(note: Note): Promise<void> {
  await storage.setItem(NOTE_KEY, note);
}

async function get(): Promise<Note | null> {
  const note = await storage.getItem<Note>(NOTE_KEY);
  return note;
}

async function remove(): Promise<void> {
  await storage.removeItem(NOTE_KEY);
}

export const noteStorage = {set, get, remove};
