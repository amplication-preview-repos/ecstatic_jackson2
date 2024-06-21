import { CrmDataCreateNestedManyWithoutBotsInput } from "./CrmDataCreateNestedManyWithoutBotsInput";
import { SubscriptionCreateNestedManyWithoutBotsInput } from "./SubscriptionCreateNestedManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotCreateInput = {
  active?: boolean | null;
  crmDataItems?: CrmDataCreateNestedManyWithoutBotsInput;
  customPrompts?: string | null;
  languageModel?: "Option1" | null;
  name?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
