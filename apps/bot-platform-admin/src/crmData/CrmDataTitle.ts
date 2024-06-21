import { CrmData as TCrmData } from "../api/crmData/CrmData";

export const CRMDATA_TITLE_FIELD = "phoneNumber";

export const CrmDataTitle = (record: TCrmData): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
