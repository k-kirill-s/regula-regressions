import { Scenario } from './detect';

export type ComplianceStatus = 'compliant' | 'non-compliant';

export type Compliance = {
  scenario: Scenario;
  status: ComplianceStatus;
};

export type ImageQualityCase = {
  description: string;
  path: string;
  compliances: Compliance[];
};
