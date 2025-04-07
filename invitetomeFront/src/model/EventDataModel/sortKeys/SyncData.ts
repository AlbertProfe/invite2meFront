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