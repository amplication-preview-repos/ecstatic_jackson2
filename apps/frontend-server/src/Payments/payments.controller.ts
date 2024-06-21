import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentsService } from "./payments.service";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentsController {
  constructor(protected readonly service: PaymentsService) {}
}
