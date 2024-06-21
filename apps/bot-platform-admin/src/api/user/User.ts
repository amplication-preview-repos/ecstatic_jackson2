import { Appointment } from "../appointment/Appointment";
import { Bot } from "../bot/Bot";
import { CrmData } from "../crmData/CrmData";
import { LanguageSetting } from "../languageSetting/LanguageSetting";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  appointments?: Array<Appointment>;
  bots?: Array<Bot>;
  createdAt: Date;
  crmDataItems?: Array<CrmData>;
  email: string | null;
  firstName: string | null;
  id: string;
  languageSettings?: Array<LanguageSetting>;
  lastName: string | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
