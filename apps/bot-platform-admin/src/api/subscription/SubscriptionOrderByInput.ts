import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  botId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
