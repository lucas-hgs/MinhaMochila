export interface Activity {
  id: string;
  title: string;
  description: string;
  date: {
    fullDate: string;
    hours: string;
  };
}
