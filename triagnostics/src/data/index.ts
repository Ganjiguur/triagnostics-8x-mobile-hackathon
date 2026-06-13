export interface ChartDataPoint {
  week: number;
  value: number;
}

export const digestiveComfortData: ChartDataPoint[] = [
  { week: 0, value: 35 },
  { week: 1, value: 40 },
  { week: 2, value: 42 },
  { week: 3, value: 48 },
  { week: 4, value: 55 },
  { week: 5, value: 65 },
  { week: 6, value: 70 },
  { week: 7, value: 75 },
  { week: 8, value: 80 },
];

export const energyLevelsData: ChartDataPoint[] = [
  { week: 0, value: 40 },
  { week: 1, value: 42 },
  { week: 2, value: 45 },
  { week: 3, value: 50 },
  { week: 4, value: 55 },
  { week: 5, value: 62 },
  { week: 6, value: 68 },
  { week: 7, value: 72 },
  { week: 8, value: 75 },
];

export const bloatingFrequencyData: ChartDataPoint[] = [
  { week: 0, value: 80 },
  { week: 1, value: 75 },
  { week: 2, value: 72 },
  { week: 3, value: 68 },
  { week: 4, value: 60 },
  { week: 5, value: 50 },
  { week: 6, value: 40 },
  { week: 7, value: 35 },
  { week: 8, value: 28 },
];

export const scienceSteps = [
  {
    title: "Discovery",
    description:
      "Your profile starts with our comprehensive 8-question assessment.",
    icon: "Search",
  },
  {
    title: "Analysis",
    description:
      "Our algorithm analyzes your responses across 4 wellness dimensions.",
    icon: "BarChart3",
  },
  {
    title: "Matching",
    description:
      "Your results match to one of 4 specialized gut-health archetypes.",
    icon: "Zap",
  },
  {
    title: "Personalization",
    description:
      "Receive tailored recommendations designed just for your profile.",
    icon: "Target",
  },
];
