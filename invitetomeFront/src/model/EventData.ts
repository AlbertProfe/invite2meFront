export interface EventData {
  /* Partition key */
  eventId: string; 
  /* Sort Keys */
  core: CoreData;
  sync: SyncData;
  // Todo - bundles data
  statistics: Statistics;
  artists: Artists;
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
export interface Artists {
  artists: string,
  artistsQty: number
}

export interface Artist {
  headliner: boolean;
  genre: string;
  name: string;
  id: string
}



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