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
  
  type InvitationType = "PERSONAL" | "FAMILY" | "BUSINESS" | "OTHER"
  type InvitationStatus = "Draft" | "Aproved" | "Sent" | "Open" | "Error"
  