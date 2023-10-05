export type SupportTicket = {
  createdAt: Date;
  details: string;
  email: string;
  id: string;
  priority?: "High" | "Medium" | "Low";
  subject: string;
  updatedAt: Date;
  username: string;
};
