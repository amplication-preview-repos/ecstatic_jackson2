import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrmDataServiceBase } from "./base/crmData.service.base";

@Injectable()
export class CrmDataService extends CrmDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
