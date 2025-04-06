export interface EventData {
  eventId: string; // Partition Key
  /* Sort Keys */
  core: CoreData;
  // Todo - Add sync data
  // Todo - bundles data
  // For bundles and invitations items
  [key: string]: any
}
export interface CoreData {
  generalData: GeneralData;
  eventDates: Array<{ [key: string]: string | { [key: string]: string } }>;
  quotes: {
    [key: string]: number;
  };
  status: EventStatus;
}
export interface GeneralData {
  country: string;
  venue: string;
  address: string;
  city: string;
  endDate: string;
  postalCode: string;
  description: string;
  edition: string;
  daysQty: number;
  type: string;
  logoUrl: string;
  createdBy: string;
  phone: string;
  websiteUrl: string;
  yearEdition: number;
  name: string;
  modifiedBy: string;
  tag: string;
  startDate: string;
  eventCode: string;
  // Todo - Add gates or entrances
}

type EventStatus = "Upcoming" | "Draft" | "Active" | "In Progress" | "Trash";
