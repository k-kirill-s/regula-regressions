export type Scenario = {
  api: string;
  ui: string;
};

export type Scenarios = Record<string, Scenario>;

export const ScenariosData: Scenarios = {
  visa_usa: { api: 'QualityVisaUSA', ui: 'Visa USA' },
  visa_schengen: { api: 'QualityVisaSchengen', ui: 'Visa Schengen' },
  icao: { api: 'QualityICAO', ui: 'QualityICAO' },
  custom: { api: 'QualityCustom', ui: 'Custom' },
};

//request

export interface DetectRequest {
  processParam: DetectParams;
  image: string;
}

export interface DetectParams {
  onlyCentralFace?: boolean;
  scenario?: string;
  outputImageParams?: {
    crop: {
      type: number;
      size: {
        0: number;
        1: number;
      };
    };
  };
}

//response

export interface DetectResponse {
  code: number;
  detectionTime: number;
  elapsedTime: number;
  msg: string;
  results: {
    detections: object;
    detectorType: number;
    landmarksTyp: number;
    scenario: string;
  };
  metadata: {
    serverTime: string;
    ctx: {
      userIp: string;
    };
  };
}
