import { APIScenarios } from './detect';

export type ComplianceStatus = 'compliant' | 'non-compliant';

export type Compliance = {
  scenario: APIScenarios;
  status: ComplianceStatus;
};

export type ImageQualityCase = {
  description: string;
  path: string;
  complainces: Compliance[];
};
