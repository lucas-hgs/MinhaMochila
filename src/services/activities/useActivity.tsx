import {ActivitiesService} from './activityTypes';
import {
  useActivityServiceZustand,
  useActivityZustand,
} from './useActivityZustand';

export function useActivity(): ActivitiesService['activity'] {
  return useActivityZustand();
}

export function useActivityService(): Pick<
  ActivitiesService,
  'saveActivity' | 'removeActivity' | 'activity'
> {
  return useActivityServiceZustand();
}
