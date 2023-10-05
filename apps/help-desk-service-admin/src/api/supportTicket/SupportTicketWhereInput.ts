import { StringFilter } from "../../util/StringFilter";

export type SupportTicketWhereInput = {
  details?: StringFilter;
  email?: StringFilter;
  id?: StringFilter;
  priority?: "High" | "Medium" | "Low";
  subject?: StringFilter;
  username?: StringFilter;
};
