import { DetectRequest } from '../../types/detect';
import { createImageBase64 } from '../../utils/image';

export function prepareQualityImagePayload(path: string, apiScenario: string): DetectRequest {
  const imageBase64 = createImageBase64(path);
  return {
    processParam: {
      onlyCentralFace: true,
      scenario: apiScenario,
    },
    image: imageBase64,
  };
}
