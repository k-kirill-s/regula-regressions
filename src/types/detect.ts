export enum APIScenarios {
  VISA_USA = 'QualityVisaUSA',
  VISA_SCHENGEN = 'QualityVisaSchengen',
  ICAO = 'QualityICAO',
  CUSTOM = 'QualityCustom',
}
export enum UIScenarios {
  VISA_USA = 'Visa USA',
  VISA_SCHENGEN = 'Visa Schengen',
  ICAO = 'ICAO',
  CUSTOM = 'Custom',
}

//request

export interface DetectRequest {
  processParam: DetectParams;
  image: string; // Base64-encoded image (raw base64, no data URL prefix)
}

export interface DetectParams {
  onlyCentralFace?: boolean;
  scenario?: APIScenarios;
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

export interface DetectionResponse {
  code: number;
  detectionTime: number;
  elapsedTime: number;
  msg: string;
  results: {
    detections: DetectionResult[];
    detectorType: number;
    landmarksTyp: number;
    scenario: APIScenarios;
  };
  metadata: {
    serverTime: string;
    ctx: {
      userIp: string;
    };
  };
}

export interface DetectionResult {}
