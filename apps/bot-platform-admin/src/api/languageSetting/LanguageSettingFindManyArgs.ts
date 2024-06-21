import { LanguageSettingWhereInput } from "./LanguageSettingWhereInput";
import { LanguageSettingOrderByInput } from "./LanguageSettingOrderByInput";

export type LanguageSettingFindManyArgs = {
  where?: LanguageSettingWhereInput;
  orderBy?: Array<LanguageSettingOrderByInput>;
  skip?: number;
  take?: number;
};
