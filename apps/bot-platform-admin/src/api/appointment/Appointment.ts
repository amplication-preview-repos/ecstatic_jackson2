import { User } from "../user/User";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  id: string;
  time: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
