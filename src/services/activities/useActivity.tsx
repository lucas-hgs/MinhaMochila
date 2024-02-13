import {ActivitiesService} from './activityTypes';
import {
  useActivityServiceZustand,
  useActivityZustand,
} from './useActivityZustand';

export function useNote(): ActivitiesService['activity'] {
  return useActivityZustand();
}

export function useNoteService(): Pick<
  ActivitiesService,
  'saveActivity' | 'removeActivity' | 'activity'
> {
  return useActivityServiceZustand();
}
