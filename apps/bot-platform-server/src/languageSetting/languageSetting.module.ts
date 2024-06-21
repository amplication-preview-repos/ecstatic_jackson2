import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageSettingModuleBase } from "./base/languageSetting.module.base";
import { LanguageSettingService } from "./languageSetting.service";
import { LanguageSettingController } from "./languageSetting.controller";
import { LanguageSettingResolver } from "./languageSetting.resolver";

@Module({
  imports: [LanguageSettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [LanguageSettingController],
  providers: [LanguageSettingService, LanguageSettingResolver],
  exports: [LanguageSettingService],
})
export class LanguageSettingModule {}
