export interface EventData {
  eventId: string;
  core: CoreData;
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
}

export interface CoreData {
  generalData: GeneralData;
  status: EventStatus;
}

type EventStatus = "Upcoming" | "Draft" | "Active" | "In Progress" | "Trash";
