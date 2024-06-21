import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CrmDataListRelationFilter } from "../crmData/CrmDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotWhereInput = {
  active?: BooleanNullableFilter;
  crmDataItems?: CrmDataListRelationFilter;
  customPrompts?: StringNullableFilter;
  id?: StringFilter;
  languageModel?: "Option1";
  name?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  user?: UserWhereUniqueInput;
};
