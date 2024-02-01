import { IAccountMapperUser } from "./IUser";

export interface IAccountMapping {
  id: number;
  engagementName: string;
  entityName: string;
  yearEnd: string;
  stage: string;
  createdOn: string;
  createdBy: IAccountMapperUser;
  reviewedBy: IAccountMapperUser;
  validatedBy?: IAccountMapperUser;
}
