import { test } from '@playwright/test';

import { imageQualityCases } from '../../data/testData';
import { detect } from '../../../src/api/client/detect';
import type { ComplianceStatus } from '../../../src/types/test';
import { expectToEqual, expectToLess } from '../../../src/service/assertions';
import { prepareQualityImagePayload } from '../../../src/service/api/detect';

/* 
Of course, here should be much more tests for different combintations or rule passing
For example, US non-cropped photo, in my understanding of ACC, it should be non-complaint without additional crop
*/
test.describe(`Detect: Face Image Quality API functional cases`, async () => {
  imageQualityCases.forEach(({ description, path, compliances }) => {
    compliances.forEach(({ scenario, status }) => {
      const apiScenario = scenario.api;
      test(`Functional: ${description} | ${apiScenario} -> ${status}`, async () => {
        const payload = prepareQualityImagePayload(path, apiScenario);
        const response = await detect(payload);

        await expectToEqual(response.code, 0, 'response code');
        await expectToEqual(response.msg, 'FACER_OK', 'response message');
        await expectToLess(response.detectionTime, 1, 'detection time');

        const nonCompliant =
          (response as any)?.results?.detections?.[0]?.quality?.nonCompliant ?? [];
        const actual: ComplianceStatus =
          Array.isArray(nonCompliant) && nonCompliant.length === 0 ? 'compliant' : 'non-compliant';

        await expectToEqual(actual, status, 'compliance status');
      });
    });
  });
});

/* 
While API docs https://dev.regulaforensics.com/FaceSDK-web-openapi/#tag/match/operation/detect do not share a lot, except of 200 and 403,
There should be at least some negative test cases to validate, when image was not sent, not existed scenario was selected or some issue was slipped into custom scenario
And of course access test, if we are speaking about prod version, something to receive 401/403
*/