export interface EventData {
  /* Partition key */
  eventId: string; 
  /* Sort Keys */
  SortKey: CoreData;
  sync: SyncData;
  // Todo - bundles data
  statistics: Statistics;
  artists: ArtistsData;
  // For bundles and invitations items
  [key: string]: Bundle | Invitation | any;
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

export interface SyncData {
  timestamps: {
    core: string;
    bundles: string;
    artists: string;
    statistics: string;
    // For bundles and invitations items
    [key: string]: string;
  }
}

export interface Statistics {
  statisticsData: StatisticsData;
}

export interface StatisticsData {
  openRate: number;
  totalScans: number;
  attendanceRate: number;
}

export interface ArtistsData {
  artists: string,
  artistsQty: number
}

export interface Artist {
  headliner: boolean;
  genre: string;
  name: string;
  id: string
}

export interface Bundle {
  accepted: number,
  sent: number,
  totatlInvitations: number,
  contacts: Contact[],
  templates: Template[]
}

export interface Contact {
  name: string;
  email: string;
}

export interface Template {
  subject: string;
  id: string;
  body: string;
}

export interface Invitation {
  type: InvitationType;
  status: InvitationStatus;
  sentDate: string;
  phone: string;
  emailSent: boolean;
  emailOpened: boolean;
  name: string;
  emailReceived: boolean;
  bundle: string;
  email: string;
  qrValidated: boolean;
}
type InvitationType = "PERSONAL" | "FAMILY" | "BUSINESS"
type InvitationStatus = "Draft" | "Aproved" | "Sent" | "Open" | "Error"

// const mockEventData : EventData[] = [];

// const event1 : EventData = {
//   eventId: "EVENT_001",
//   core: {
//     generalData: {
//     },
//     eventDates: [],
//     quotes: {
//       "FastTrack": 100,
//     },
//     status: "Upcoming",
//   }
// }