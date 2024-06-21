import { Module } from "@nestjs/common";
import { CalendarService } from "./calendar.service";
import { CalendarController } from "./calendar.controller";
import { CalendarResolver } from "./calendar.resolver";

@Module({
  controllers: [CalendarController],
  providers: [CalendarService, CalendarResolver],
  exports: [CalendarService],
})
export class CalendarModule {}
