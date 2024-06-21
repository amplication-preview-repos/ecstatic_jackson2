import { User } from "../user/User";

export type LanguageSetting = {
  createdAt: Date;
  id: string;
  language?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
