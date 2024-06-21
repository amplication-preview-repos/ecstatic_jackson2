import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LanguageSettingCreateInput = {
  language?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
