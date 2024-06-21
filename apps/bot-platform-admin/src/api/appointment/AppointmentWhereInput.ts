import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  time?: DateTimeNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
