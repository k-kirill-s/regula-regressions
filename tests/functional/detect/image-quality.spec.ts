import { test, expect } from '@playwright/test';

import { imageQualityCases } from '../../data/testData';
import { createImageBase64 } from '../../../src/utils/image';
import { detect } from '../../../src/api/client/detect';
import type { DetectRequest, DetectionResponse } from '../../../src/types/detect';
import type { ComplianceStatus } from '../../../src/types/test';
import { expectToEqual } from '../../../src/service/assertions';

test.describe(`Detect: Face Image Quality API functional cases`, async () => {
  imageQualityCases.forEach(({ description, path, complainces }) => {
    complainces.forEach(({ scenario, status }) => {
      test(`Functional: ${description} | ${scenario} -> ${status}`, async () => {
        const imageBase64 = createImageBase64(path);
        const payload: DetectRequest = {
          processParam: {
            onlyCentralFace: true,
            scenario,
          },
          image: imageBase64,
        };

        const response: DetectionResponse = await detect(payload);

        expectToEqual(response.code, 0, "response code is showing FACER_OK");

        const nonCompliant = (response as any)?.results?.detections?.[0]?.quality?.nonCompliant ?? [];
        const actual: ComplianceStatus = Array.isArray(nonCompliant) && nonCompliant.length === 0
          ? 'compliant'
          : 'non-compliant';

        expectToEqual(actual, status, "compliance status");
      });
    });
  });
});
