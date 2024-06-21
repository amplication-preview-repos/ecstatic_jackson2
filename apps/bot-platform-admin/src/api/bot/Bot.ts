import { CrmData } from "../crmData/CrmData";
import { Subscription } from "../subscription/Subscription";
import { User } from "../user/User";

export type Bot = {
  active: boolean | null;
  createdAt: Date;
  crmDataItems?: Array<CrmData>;
  customPrompts: string | null;
  id: string;
  languageModel?: "Option1" | null;
  name: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  user?: User | null;
};
