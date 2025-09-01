import { test } from '@playwright/test';

import { FaceImageQualityPage } from '../../../src/ui/pages/image-quality.page';
import { imageQualityCases } from '../../data/testData';
import { expectToEqual } from '../../../src/service/assertions';

const data = imageQualityCases[1];
const compliance = data.compliances[0];
const imagePath = data.path;
const scenario = compliance.scenario;

test.describe('Detect: Face Image Quality UI Validation', () => {
  test(`UI Validation: photo - ${data.description}, scenario - ${scenario.ui}`, async ({ page }) => {
    const qualityPage = new FaceImageQualityPage(page);
    await qualityPage.open();
    await qualityPage.selectScenario(scenario);
    await qualityPage.uploadImage(imagePath);

    //uploaded image base64 validation: main view + panel

    const complianceStatus = await qualityPage.getComplianceStatus();
    await expectToEqual(complianceStatus.toLowerCase(), compliance.status, "compliance status");

    //request tab validation
    //const requestBody = await qualityPage.getRequestBody();
    //await expectToEqual(requestBody, prepareQualityImagePayload(imagePath, scenario.api), "prepared on UI request");

    //response tab validation + compare to compliance check, information should be consistent
  });
});

//in addition to one complaint and one non-complaint test for validation, could also add one more custom
//plus copy to clipboard and download json buttons need to be tested
