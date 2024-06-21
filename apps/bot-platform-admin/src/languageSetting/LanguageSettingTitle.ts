import { LanguageSetting as TLanguageSetting } from "../api/languageSetting/LanguageSetting";

export const LANGUAGESETTING_TITLE_FIELD = "id";

export const LanguageSettingTitle = (record: TLanguageSetting): string => {
  return record.id?.toString() || String(record.id);
};
