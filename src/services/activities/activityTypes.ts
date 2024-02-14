export interface Activity {
  id: string;
  title: string;
  description: string;
  date: {
    fullDate: string;
    hours: string;
  };
}

export interface ActivitiesService {
  activity: Activity[] | null;
  saveActivity: (activity: Activity[]) => Promise<void>;
  removeActivity: () => Promise<void>;
  isLoading: boolean;
}
