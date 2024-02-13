export interface Activity {
  id: string;
  title: string;
  text: string;
  date: string;
}

export interface ActivitiesService {
  activity: Activity[] | null;
  saveActivity: (activity: Activity[]) => Promise<void>;
  removeActivity: () => Promise<void>;
  isLoading: boolean;
}
