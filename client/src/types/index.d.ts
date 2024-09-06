export interface User {
  email: string;
  password: string;
}

export interface AvailabilitySlot {
  start: string;
  end: string;
}

export interface Availability {
  start: string;
  end: string;
  day: string;
  slots: AvailabilitySlot[];
}

export interface Session {
  _id: Key | null | undefined;
  user: string;
  start: string;
  end: string;
  duration: number;
  attendees: { name: string; email: string }[];
}

export interface UserPreferences {
  email: boolean;
  sms: boolean;
}

export interface Slot {
  start: string;
  end: string;
}
