import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  time?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
