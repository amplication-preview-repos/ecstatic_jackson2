import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageSettingService } from "./languageSetting.service";
import { LanguageSettingControllerBase } from "./base/languageSetting.controller.base";

@swagger.ApiTags("languageSettings")
@common.Controller("languageSettings")
export class LanguageSettingController extends LanguageSettingControllerBase {
  constructor(
    protected readonly service: LanguageSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
