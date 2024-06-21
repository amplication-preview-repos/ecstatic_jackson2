import { AppointmentUpdateManyWithoutUsersInput } from "./AppointmentUpdateManyWithoutUsersInput";
import { BotUpdateManyWithoutUsersInput } from "./BotUpdateManyWithoutUsersInput";
import { CrmDataUpdateManyWithoutUsersInput } from "./CrmDataUpdateManyWithoutUsersInput";
import { LanguageSettingUpdateManyWithoutUsersInput } from "./LanguageSettingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutUsersInput;
  bots?: BotUpdateManyWithoutUsersInput;
  crmDataItems?: CrmDataUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  languageSettings?: LanguageSettingUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  username?: string;
};
