import * as path from 'path';
import { ImageQualityCase } from '../../src/types/test';
import { ScenariosData } from '../../src/types/detect';

const imagesDir = path.resolve(__dirname, '../data/images');

export const imageQualityCases: ImageQualityCase[] = [
  {
    description: 'US photo',
    path: path.join(imagesDir, 'us-cropped.jpg'),
    compliances: [
      {
        scenario: ScenariosData.visa_usa,
        status: 'compliant',
      },
      {
        scenario: ScenariosData.visa_schengen,
        status: 'non-compliant',
      },
      {
        scenario: ScenariosData.icao,
        status: 'compliant',
      },
    ],
  },
  {
    description: 'Schengen photo',
    path: path.join(imagesDir, 'schengen.jpg'),
    compliances: [
      {
        scenario: ScenariosData.visa_usa,
        status: 'non-compliant',
      },
      {
        scenario: ScenariosData.visa_schengen,
        status: 'compliant',
      },
      {
        scenario: ScenariosData.icao,
        status: 'compliant',
      },
    ],
  },
];
