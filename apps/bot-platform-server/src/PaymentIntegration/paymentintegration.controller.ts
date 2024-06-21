import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentIntegrationService } from "./paymentintegration.service";

@swagger.ApiTags("paymentIntegrations")
@common.Controller("paymentIntegrations")
export class PaymentIntegrationController {
  constructor(protected readonly service: PaymentIntegrationService) {}

  @common.Post("/payment/binance")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessBinancePayment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessBinancePayment(body);
      }

  @common.Post("/payment/stripe")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessStripePayment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessStripePayment(body);
      }
}
