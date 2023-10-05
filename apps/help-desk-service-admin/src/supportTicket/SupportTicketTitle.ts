import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "username";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.username?.toString() || String(record.id);
};
