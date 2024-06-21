import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BotManagementService } from "./botmanagement.service";
import { BotDto } from "../botManagement/BotDto";

@swagger.ApiTags("botManagements")
@common.Controller("botManagements")
export class BotManagementController {
  constructor(protected readonly service: BotManagementService) {}

  @common.Get("/:id/create-bot")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateBot(
    @common.Body()
    body: BotDto
  ): Promise<string> {
        return this.service.CreateBot(body);
      }

  @common.Post("/bots")
  @swagger.ApiOkResponse({
    type: BotDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewBot(
    @common.Body()
    body: BotDto
  ): Promise<BotDto> {
        return this.service.CreateNewBot(body);
      }

  @common.Get("/:id/delete-bot")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteBot(
    @common.Body()
    body: BotDto
  ): Promise<string> {
        return this.service.DeleteBot(body);
      }

  @common.Delete("/bots/:id")
  @swagger.ApiOkResponse({
    type: BotDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteSpecificBot(
    @common.Body()
    body: BotDto
  ): Promise<BotDto> {
        return this.service.DeleteSpecificBot(body);
      }

  @common.Get("/:id/get-bot-by-id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetBotById(
    @common.Body()
    body: BotDto
  ): Promise<string> {
        return this.service.GetBotById(body);
      }

  @common.Get("/bots/:id")
  @swagger.ApiOkResponse({
    type: BotDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetBotDetailsById(
    @common.Body()
    body: BotDto
  ): Promise<BotDto> {
        return this.service.GetBotDetailsById(body);
      }

  @common.Get("/bots")
  @swagger.ApiOkResponse({
    type: BotDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListAllBots(
    @common.Body()
    body: BotDto
  ): Promise<BotDto[]> {
        return this.service.ListAllBots(body);
      }

  @common.Get("/:id/list-bots")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListBots(
    @common.Body()
    body: BotDto
  ): Promise<string> {
        return this.service.ListBots(body);
      }

  @common.Get("/:id/update-bot")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateBot(
    @common.Body()
    body: BotDto
  ): Promise<string> {
        return this.service.UpdateBot(body);
      }

  @common.Patch("/bots/:id")
  @swagger.ApiOkResponse({
    type: BotDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateExistingBot(
    @common.Body()
    body: BotDto
  ): Promise<BotDto> {
        return this.service.UpdateExistingBot(body);
      }
}
