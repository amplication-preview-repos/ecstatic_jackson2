import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrmDataService } from "./crmData.service";
import { CrmDataControllerBase } from "./base/crmData.controller.base";

@swagger.ApiTags("crmData")
@common.Controller("crmData")
export class CrmDataController extends CrmDataControllerBase {
  constructor(
    protected readonly service: CrmDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
