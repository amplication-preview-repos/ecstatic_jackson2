import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthModuleService {
  constructor() {}
  async GoogleAuth(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GoogleAuthCallback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
