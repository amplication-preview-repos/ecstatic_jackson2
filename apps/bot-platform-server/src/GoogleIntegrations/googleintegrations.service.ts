import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleIntegrationsService {
  constructor() {}
  async CreateCalendarEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateMeetLink(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ListCalendarEvents(args: string): Promise<string[]> {
    throw new Error("Not implemented");
  }
}
