import * as graphql from "@nestjs/graphql";
import { PaymentIntegrationService } from "./paymentintegration.service";

export class PaymentIntegrationResolver {
  constructor(protected readonly service: PaymentIntegrationService) {}

  @graphql.Mutation(() => String)
  async ProcessBinancePayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessBinancePayment(args);
  }

  @graphql.Mutation(() => String)
  async ProcessStripePayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessStripePayment(args);
  }
}
