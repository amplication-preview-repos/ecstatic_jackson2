import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LanguageSettingUpdateInput = {
  language?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
