import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
