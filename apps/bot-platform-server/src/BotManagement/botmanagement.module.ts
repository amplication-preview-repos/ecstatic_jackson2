import { Module } from "@nestjs/common";
import { BotManagementService } from "./botmanagement.service";
import { BotManagementController } from "./botmanagement.controller";
import { BotManagementResolver } from "./botmanagement.resolver";

@Module({
  controllers: [BotManagementController],
  providers: [BotManagementService, BotManagementResolver],
  exports: [BotManagementService],
})
export class BotManagementModule {}
