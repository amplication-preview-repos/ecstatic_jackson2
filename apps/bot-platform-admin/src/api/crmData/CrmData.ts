import { Bot } from "../bot/Bot";
import { User } from "../user/User";

export type CrmData = {
  bot?: Bot | null;
  createdAt: Date;
  email: string | null;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
