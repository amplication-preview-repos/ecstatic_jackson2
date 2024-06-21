import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LanguageSettingWhereInput = {
  id?: StringFilter;
  language?: "Option1";
  user?: UserWhereUniqueInput;
};
