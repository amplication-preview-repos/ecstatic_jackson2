import * as graphql from "@nestjs/graphql";
import { PaymentsService } from "./payments.service";

export class PaymentsResolver {
  constructor(protected readonly service: PaymentsService) {}
}
