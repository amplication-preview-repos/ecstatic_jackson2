import { Module } from "@nestjs/common";
import { GoogleIntegrationsService } from "./googleintegrations.service";
import { GoogleIntegrationsController } from "./googleintegrations.controller";
import { GoogleIntegrationsResolver } from "./googleintegrations.resolver";

@Module({
  controllers: [GoogleIntegrationsController],
  providers: [GoogleIntegrationsService, GoogleIntegrationsResolver],
  exports: [GoogleIntegrationsService],
})
export class GoogleIntegrationsModule {}
