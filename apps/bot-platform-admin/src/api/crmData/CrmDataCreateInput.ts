import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrmDataCreateInput = {
  bot?: BotWhereUniqueInput | null;
  email?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
