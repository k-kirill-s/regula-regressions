import { post } from './base';
import { StatusCodes } from '../../constants/api';
import { apiEndpoints } from '../../constants/endpoints';
import { expectToEqual } from '../../service/assertions';
import type { DetectResponse, DetectRequest } from '../../types/detect';
import { createBasicHeaders } from '../../utils/header';

export async function detect(
  data: DetectRequest,
  statusCode = StatusCodes.OK,
): Promise<DetectResponse> {
  const headers = createBasicHeaders('application/json');
  const body = JSON.stringify(data, null, 2);

  const response = await post(apiEndpoints.DETECT, body, headers);

  await expectToEqual(response.status(), statusCode, 'Validate status code expectation');

  return await response.json();
}
