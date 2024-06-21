import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthModuleService } from "./authmodule.service";

@swagger.ApiTags("authModules")
@common.Controller("authModules")
export class AuthModuleController {
  constructor(protected readonly service: AuthModuleService) {}

  @common.Get("/auth/google")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GoogleAuth(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GoogleAuth(body);
      }

  @common.Get("/auth/google/callback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GoogleAuthCallback(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GoogleAuthCallback(body);
      }
}
