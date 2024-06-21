import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LanguageSettingServiceBase } from "./base/languageSetting.service.base";

@Injectable()
export class LanguageSettingService extends LanguageSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
