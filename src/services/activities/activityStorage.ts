import {storage} from '../storage';

import {Activity} from './activityTypes';

const ACTIVITY_KEY = '@Activity';

async function set(activity: Activity[]): Promise<void> {
  await storage.setItem(ACTIVITY_KEY, activity);
}

async function get(): Promise<Activity[] | null> {
  const activity = await storage.getItem<Activity[]>(ACTIVITY_KEY);
  return activity;
}

async function remove(): Promise<void> {
  await storage.removeItem(ACTIVITY_KEY);
}

async function clear(): Promise<void> {
  await storage.clear();
}

export const activityStorage = {set, get, remove, clear};
