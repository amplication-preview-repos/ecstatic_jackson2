import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { BotListRelationFilter } from "../bot/BotListRelationFilter";
import { CrmDataListRelationFilter } from "../crmData/CrmDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageSettingListRelationFilter } from "../languageSetting/LanguageSettingListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  appointments?: AppointmentListRelationFilter;
  bots?: BotListRelationFilter;
  crmDataItems?: CrmDataListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  languageSettings?: LanguageSettingListRelationFilter;
  lastName?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
