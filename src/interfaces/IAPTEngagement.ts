import { engagementStates } from "../enums/EngagementStates";

export interface IAPTEngagementData {
  engagementId: string;
  projectId: string;
  clientId: string;
  engagementState: engagementStates;
  engagementName: string;
  clientName: string;
  engagementBase: string;
  engagementGroup: string;
  entityName: string;
  entityNameStateDate: string;
  entityType: string;
  groupEngagement: string;
  language: string;
  engagementType: string;
  startDate: string;
  endDate: string;
  reviewer: string;
  preparer: string;
  validator?: string;
}
