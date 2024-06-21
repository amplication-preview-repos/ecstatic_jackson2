import * as graphql from "@nestjs/graphql";
import { GoogleIntegrationsService } from "./googleintegrations.service";

export class GoogleIntegrationsResolver {
  constructor(protected readonly service: GoogleIntegrationsService) {}

  @graphql.Mutation(() => String)
  async CreateCalendarEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateCalendarEvent(args);
  }

  @graphql.Mutation(() => String)
  async CreateMeetLink(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateMeetLink(args);
  }

  @graphql.Query(() => [String])
  async ListCalendarEvents(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.ListCalendarEvents(args);
  }
}
