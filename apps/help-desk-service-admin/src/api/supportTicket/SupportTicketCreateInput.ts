export type SupportTicketCreateInput = {
  details: string;
  email: string;
  priority: "High" | "Medium" | "Low";
  subject: string;
  username: string;
};
