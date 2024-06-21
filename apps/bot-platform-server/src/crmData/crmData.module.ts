import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrmDataModuleBase } from "./base/crmData.module.base";
import { CrmDataService } from "./crmData.service";
import { CrmDataController } from "./crmData.controller";
import { CrmDataResolver } from "./crmData.resolver";

@Module({
  imports: [CrmDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [CrmDataController],
  providers: [CrmDataService, CrmDataResolver],
  exports: [CrmDataService],
})
export class CrmDataModule {}
