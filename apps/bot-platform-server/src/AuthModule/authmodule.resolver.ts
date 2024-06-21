import * as graphql from "@nestjs/graphql";
import { AuthModuleService } from "./authmodule.service";

export class AuthModuleResolver {
  constructor(protected readonly service: AuthModuleService) {}

  @graphql.Mutation(() => String)
  async GoogleAuth(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GoogleAuth(args);
  }

  @graphql.Mutation(() => String)
  async GoogleAuthCallback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GoogleAuthCallback(args);
  }
}
