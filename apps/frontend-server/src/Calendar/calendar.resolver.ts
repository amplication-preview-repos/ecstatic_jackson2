import * as graphql from "@nestjs/graphql";
import { CalendarService } from "./calendar.service";

export class CalendarResolver {
  constructor(protected readonly service: CalendarService) {}
}
