import { CoreData } from "./sortKeys/CoreData";
import { SyncData } from "./sortKeys/SyncData";
import { Statistics } from "./sortKeys/StatisticsData";
import { ArtistsData } from "./sortKeys/ArtistsData";
import { Bundle } from "./sortKeys/BundleData";
import { Invitation } from "./sortKeys/InvitationData";

export interface EventData {
  /* Partition key */
  eventId: string; 
  /* Sort Keys */
  core: CoreData;
  sync: SyncData;
  // Todo - bundles data
  statistics: Statistics;
  artists: ArtistsData;
  // For bundles and invitations items
  [key: string]: Bundle | Invitation | any;
}
