import React, {createContext, useEffect, useState} from 'react';

import {activityStorage} from '../activityStorage';
import {ActivitiesService, Activity} from '../activityTypes';

export const ActivityContext = createContext<ActivitiesService>({
  activity: null,
  isLoading: true,
  removeActivity: async () => {},
  saveActivity: async () => {},
});

export function ActivitiesProvider({children}: React.PropsWithChildren<{}>) {
  const [activity, setActivity] = useState<Activity[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startActivities();
  }, []);

  async function startActivities() {
    try {
      const at = await activityStorage.get();
      if (at) {
        setActivity(at);
      }
    } catch (error) {
      // TODO
    } finally {
      setIsLoading(false);
    }
  }

  async function saveActivity(at: Activity[]): Promise<void> {
    activityStorage.set(at);
    setActivity(at);
    startActivities();
  }

  async function removeActivity(): Promise<void> {
    activityStorage.remove();
    setActivity(null);
  }

  return (
    <ActivityContext.Provider
      value={{
        activity,
        isLoading,
        saveActivity,
        removeActivity,
      }}>
      {children}
    </ActivityContext.Provider>
  );
}
