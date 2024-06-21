import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  customPrompts?: SortOrder;
  id?: SortOrder;
  languageModel?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
