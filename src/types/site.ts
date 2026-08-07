export type NavLink = {
  label: string;
  href: string;
};

export type InterestLink = {
  label: string;
  href: string;
};

export type ParishGroup = {
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  whatsappNumber?: string;
};

export type Chapel = {
  name: string;
  location: string;
  patroness: string;
  feast: string;
  masses: string;
  holyWeekSchedule?: string[];
  pastoral: string[];
  image: string;
};

export type ParishNewsEvent = {
  title: string;
  dateLabel: string;
  description: string;
  chapelName: string;
  image?: string;
  monthIndex?: number;
  isFeatured?: boolean;
  referenceUrl?: string;
  referenceLabel?: string;
};
