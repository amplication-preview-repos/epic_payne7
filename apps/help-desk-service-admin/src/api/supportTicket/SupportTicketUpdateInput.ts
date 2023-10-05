export type SupportTicketUpdateInput = {
  details?: string;
  email?: string;
  priority?: "High" | "Medium" | "Low";
  subject?: string;
  username?: string;
};
