import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentIntegrationService {
  constructor() {}
  async ProcessBinancePayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessStripePayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
