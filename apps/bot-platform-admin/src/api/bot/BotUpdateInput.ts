import { CrmDataUpdateManyWithoutBotsInput } from "./CrmDataUpdateManyWithoutBotsInput";
import { SubscriptionUpdateManyWithoutBotsInput } from "./SubscriptionUpdateManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotUpdateInput = {
  active?: boolean | null;
  crmDataItems?: CrmDataUpdateManyWithoutBotsInput;
  customPrompts?: string | null;
  languageModel?: "Option1" | null;
  name?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
