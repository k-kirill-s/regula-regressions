import * as path from 'path';
import { ImageQualityCase } from '../../src/types/test';
import { APIScenarios } from '../../src/types/detect';

const imagesDir = path.resolve(__dirname, '../data/images');

export const imageQualityCases: ImageQualityCase[] = [
  {
    description: 'US photo',
    path: path.join(imagesDir, 'complaint-us.jpg'),
    complainces: [
      {
        scenario: APIScenarios.VISA_USA,
        status: 'compliant',
      },
      {
        scenario: APIScenarios.VISA_SCHENGEN,
        status: 'non-compliant',
      },
      {
        scenario: APIScenarios.ICAO,
        status: 'compliant',
      },
    ],
  },
  {
    description: 'Schengen photo',
    path: path.join(imagesDir, 'complaint-schengen.jpg'),
    complainces: [
      {
        scenario: APIScenarios.VISA_USA,
        status: 'non-compliant',
      },
      {
        scenario: APIScenarios.VISA_SCHENGEN,
        status: 'compliant',
      },
      {
        scenario: APIScenarios.ICAO,
        status: 'compliant',
      },
    ],
  },
];
