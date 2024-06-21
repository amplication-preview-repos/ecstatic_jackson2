import * as graphql from "@nestjs/graphql";
import { BotDto } from "../botManagement/BotDto";
import { BotManagementService } from "./botmanagement.service";

export class BotManagementResolver {
  constructor(protected readonly service: BotManagementService) {}

  @graphql.Query(() => String)
  async CreateBot(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateBot(args);
  }

  @graphql.Mutation(() => BotDto)
  async CreateNewBot(
    @graphql.Args()
    args: BotDto
  ): Promise<BotDto> {
    return this.service.CreateNewBot(args);
  }

  @graphql.Query(() => String)
  async DeleteBot(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteBot(args);
  }

  @graphql.Mutation(() => BotDto)
  async DeleteSpecificBot(
    @graphql.Args()
    args: string
  ): Promise<BotDto> {
    return this.service.DeleteSpecificBot(args);
  }

  @graphql.Query(() => String)
  async GetBotById(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetBotById(args);
  }

  @graphql.Query(() => BotDto)
  async GetBotDetailsById(
    @graphql.Args()
    args: string
  ): Promise<BotDto> {
    return this.service.GetBotDetailsById(args);
  }

  @graphql.Query(() => [BotDto])
  async ListAllBots(
    @graphql.Args()
    args: string
  ): Promise<BotDto[]> {
    return this.service.ListAllBots(args);
  }

  @graphql.Query(() => String)
  async ListBots(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ListBots(args);
  }

  @graphql.Query(() => String)
  async UpdateBot(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateBot(args);
  }

  @graphql.Mutation(() => BotDto)
  async UpdateExistingBot(
    @graphql.Args()
    args: BotDto
  ): Promise<BotDto> {
    return this.service.UpdateExistingBot(args);
  }
}
