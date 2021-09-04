export type SelectedEventArgs = {
  name: string;
  series: string;
  value: number;
};

export type ActivateEventArgs = {
  entries: any[];
  value: { name: string };
};
