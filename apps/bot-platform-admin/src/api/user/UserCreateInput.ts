import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { BotCreateNestedManyWithoutUsersInput } from "./BotCreateNestedManyWithoutUsersInput";
import { CrmDataCreateNestedManyWithoutUsersInput } from "./CrmDataCreateNestedManyWithoutUsersInput";
import { LanguageSettingCreateNestedManyWithoutUsersInput } from "./LanguageSettingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;
  bots?: BotCreateNestedManyWithoutUsersInput;
  crmDataItems?: CrmDataCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  languageSettings?: LanguageSettingCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
};
