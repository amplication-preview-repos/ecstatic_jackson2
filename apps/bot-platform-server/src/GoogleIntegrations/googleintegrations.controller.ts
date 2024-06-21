import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GoogleIntegrationsService } from "./googleintegrations.service";

@swagger.ApiTags("googleIntegrations")
@common.Controller("googleIntegrations")
export class GoogleIntegrationsController {
  constructor(protected readonly service: GoogleIntegrationsService) {}

  @common.Post("/calendar/event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCalendarEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateCalendarEvent(body);
      }

  @common.Post("/meet/link")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateMeetLink(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateMeetLink(body);
      }

  @common.Get("/calendar/events")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListCalendarEvents(
    @common.Body()
    body: string
  ): Promise<string[]> {
        return this.service.ListCalendarEvents(body);
      }
}
