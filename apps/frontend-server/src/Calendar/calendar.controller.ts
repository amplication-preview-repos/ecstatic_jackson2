import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CalendarService } from "./calendar.service";

@swagger.ApiTags("calendars")
@common.Controller("calendars")
export class CalendarController {
  constructor(protected readonly service: CalendarService) {}
}
