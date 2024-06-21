import { Bot } from "../bot/Bot";
import { User } from "../user/User";

export type Subscription = {
  bot?: Bot | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
