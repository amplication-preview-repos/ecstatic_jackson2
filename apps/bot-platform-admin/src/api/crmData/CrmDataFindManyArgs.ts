import { CrmDataWhereInput } from "./CrmDataWhereInput";
import { CrmDataOrderByInput } from "./CrmDataOrderByInput";

export type CrmDataFindManyArgs = {
  where?: CrmDataWhereInput;
  orderBy?: Array<CrmDataOrderByInput>;
  skip?: number;
  take?: number;
};
