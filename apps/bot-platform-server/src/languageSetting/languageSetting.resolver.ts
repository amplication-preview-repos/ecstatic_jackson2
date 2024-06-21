import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LanguageSettingResolverBase } from "./base/languageSetting.resolver.base";
import { LanguageSetting } from "./base/LanguageSetting";
import { LanguageSettingService } from "./languageSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageSetting)
export class LanguageSettingResolver extends LanguageSettingResolverBase {
  constructor(
    protected readonly service: LanguageSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
