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