import { Injectable } from "@nestjs/common";
import { BotDto } from "../botManagement/BotDto";

@Injectable()
export class BotManagementService {
  constructor() {}
  async CreateBot(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewBot(args: BotDto): Promise<BotDto> {
    throw new Error("Not implemented");
  }
  async DeleteBot(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteSpecificBot(args: string): Promise<BotDto> {
    throw new Error("Not implemented");
  }
  async GetBotById(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetBotDetailsById(args: string): Promise<BotDto> {
    throw new Error("Not implemented");
  }
  async ListAllBots(args: string): Promise<BotDto[]> {
    throw new Error("Not implemented");
  }
  async ListBots(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateBot(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateExistingBot(args: BotDto): Promise<BotDto> {
    throw new Error("Not implemented");
  }
}
