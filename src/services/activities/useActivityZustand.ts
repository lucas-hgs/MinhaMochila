import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {asyncStorage} from '../storage';

import {ActivitiesService} from './activityTypes';

const useActivityStore = create<ActivitiesService>()(
  persist(
    set => ({
      activity: null,
      saveActivity: async activity => set({activity}),
      removeActivity: async () => {},
      isLoading: true,
    }),
    {
      name: 'list-activity',
      storage: createJSONStorage(() => asyncStorage),
    },
  ),
);

export function useActivityZustand(): ActivitiesService['activity'] {
  return useActivityStore(state => state.activity);
}

export function useActivityServiceZustand(): Pick<
  ActivitiesService,
  'saveActivity' | 'removeActivity' | 'activity'
> {
  const saveActivity = useActivityStore(state => state.saveActivity);
  const removeActivity = useActivityStore(state => state.removeActivity);
  const activity = useActivityStore(state => state.activity);

  return {
    saveActivity,
    removeActivity,
    activity,
  };
}
