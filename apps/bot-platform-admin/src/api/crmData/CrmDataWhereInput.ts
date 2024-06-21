import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrmDataWhereInput = {
  bot?: BotWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
